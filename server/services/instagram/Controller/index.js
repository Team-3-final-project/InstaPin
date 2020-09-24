const axios = require("axios");
const puppeteer = require("puppeteer");
const fs = require("fs");

class InstagramController {
  static async profile(req, res) {
    console.log("testing", req.params.user);
    let is_highlight = true;

    if (is_highlight) {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      try {
        await page.goto(`https://www.instagram.com/${req.params.user}/`);
        await page.waitForSelector(".NCYx-", {
          visible: true,
          timeout: 1000,
        });
        await browser.close();
      } catch (err) {
        is_highlight = false;
        await browser.close();
      }
    }

    axios
      .get(`https://www.instagram.com/${req.params.user}/`)
      .then(async (resp) => {
        const x = resp.data.match(
          /(?<=<script type=\"text\/javascript\">window\._sharedData\s=\s).*?(?=<\/script>)/gim
        );

        const data = JSON.parse(x[0].slice(0, x[0].length - 1)).entry_data
          .ProfilePage[0].graphql.user;

        console.log(data);

        const biography = {
          id: data.id,
          username: data.username,
          full_name: data.full_name,
          is_private: data.is_private,
          posts: data.edge_owner_to_timeline_media.count,
          followers: data.edge_followed_by.count,
          following: data.edge_follow.count,
          description: data.biography,
          external_url: data.external_url,
          profile_pic: data.profile_pic_url,
          profile_pic_hd: data.profile_pic_url_hd,
        };

        const posts = data.edge_owner_to_timeline_media.edges.map((x) => {
          if (x.node.is_video) {
            return {
              id: x.node.id,
              video_url: x.node.video_url,
              views: x.node.video_view_count,
              likes: x.node.edge_liked_by.count,
              uploaded_at: x.node.taken_at_timestamp,
            };
          }

          return {
            id: x.node.id,
            image_url: x.node.display_url,
            likes: x.node.edge_liked_by.count,
            uploaded_at: x.node.taken_at_timestamp,
          };
        });

        const igtv = data.edge_felix_video_timeline.edges.map((x) => {
          const data = {
            id: x.node.id,
            thumbnail: x.node.display_url,
            video_url: x.node.video_url,
            views: x.node.video_view_count,
            likes: x.node.edge_media_preview_like,
            uploaded_at: x.node.taken_at_timestamp,
          };

          return data;
        });

        console.log(is_highlight);

        return res
          .status(200)
          .json({ biography, posts, igtv, highlight: is_highlight });

      })
      .catch((err) => res.status(500).json(err));
  }

  static async story(req, res) {
    const browser = await puppeteer.launch();
    var page = await browser.newPage();

    async function doLogin(url, username, password) {
      await page.goto(url);

      await page.waitForSelector('input[name="username"]');
      await page.type('input[name="username"]', username);
      await page.type('input[name="password"]', password);
      await page.click('button[type="submit"]');
    }

    const cookiesPath = "./cookies.json";
    const cookiesExists = fs.existsSync(cookiesPath);

    if (cookiesExists) {
      console.log("--------------------> cookies");
      const cookiesString = fs.readFileSync("./cookies.json");
      const cookies = JSON.parse(cookiesString);
      await page.setCookie(...cookies);
    } else {
      console.log("--------------------> login");
      await doLogin(
        "https://www.instagram.com/accounts/login/",
        "23tldr",
        "Bermaintembak2an"
      );
      await page.waitFor(2500);
      const cookies = await page.cookies();
      fs.writeFileSync("./cookies.json", JSON.stringify(cookies, null, 2));
    }

    await page.screenshot({ path: "1.png" });

    // Add a wait for some selector on the home page to load to ensure the next step works correctly
    await page.waitFor(2000);

    await page.goto(`https://www.instagram.com/${req.params.user}/`);
    await page.screenshot({ path: "2.png" });

    try {
      await page.waitForSelector(".h5uC0", {
        visible: true,
        timeout: 2000,
      });

      await page.click("img._6q-tv");
      console.log("clicking story");
      await page.screenshot({ path: "3-testing.png" });

      await page.setRequestInterception(true);
      await page.on("response", async (response) => {
        console.log(response.url());
        const data = await response.json();
        console.log(data);
        if (data.data.reels_media) {
          console.log("masuk");
          return res.status(200).json(data.data.reels_media[0].items);
        }
      });
    } catch (err) {
      console.log(err);
      return res.status(200).json([]);
    }

    await page.waitFor(2000);

    await page.screenshot({ path: "4-testing.png" });

    await page.waitFor(2000);

    await page.screenshot({ path: "5-testing.png" });

    await browser.close();
  }

  static async get_highlight(req, res) {
    const browser = await puppeteer.launch();
    var page = await browser.newPage();

    async function doLogin(url, username, password) {
      await page.goto(url);

      await page.waitForSelector('input[name="username"]');
      await page.type('input[name="username"]', username);
      await page.type('input[name="password"]', password);
      await page.click('button[type="submit"]');
    }

    const cookiesPath = "./cookies.json";
    const cookiesExists = fs.existsSync(cookiesPath);

    if (cookiesExists) {
      console.log("--------------------> cookies");
      const cookiesString = fs.readFileSync("./cookies.json");
      const cookies = JSON.parse(cookiesString);
      await page.setCookie(...cookies);
    } else {
      console.log("--------------------> login");
      await doLogin(
        "https://www.instagram.com/accounts/login/",
        "23tldr",
        "Bermaintembak2an"
      );
      await page.waitFor(2500);
      const cookies = await page.cookies();
      console.log(JSON.stringify(cookies, null, 2));
      fs.writeFileSync("./cookies.json", JSON.stringify(cookies, null, 2));
    }

    await page.goto(`https://www.instagram.com/${req.params.user}/`);

    await page.setRequestInterception(true);
    page.on("response", async (response) => {
      console.log(response.url());
      const highlight_data = await response.json();
      console.log(highlight_data);
      if (highlight_data.data.user.edge_highlight_reels) {
        console.log("masuk");
        await browser.close();
        return res.send({
          highlight: highlight_data.data.user.edge_highlight_reels.edges.map(x => x.node)
        });
      }
    });
  }

  static async highlight(req, res) {
    const browser = await puppeteer.launch();
    var page = await browser.newPage();

    async function doLogin(url, username, password) {
      await page.goto(url);

      await page.waitForSelector('input[name="username"]');
      await page.type('input[name="username"]', username);
      await page.type('input[name="password"]', password);
      await page.click('button[type="submit"]');
    }

    const cookiesPath = "./cookies.json";
    const cookiesExists = fs.existsSync(cookiesPath);

    if (cookiesExists) {
      console.log("--------------------> cookies");
      const cookiesString = fs.readFileSync("./cookies.json");
      const cookies = JSON.parse(cookiesString);
      await page.setCookie(...cookies);
    } else {
      console.log("--------------------> login");
      await doLogin(
        "https://www.instagram.com/accounts/login/",
        "23tldr",
        "Bermaintembak2an"
      );
      await page.waitFor(2500);
      const cookies = await page.cookies();
      fs.writeFileSync("./cookies.json", JSON.stringify(cookies, null, 2));
    }

    await page.screenshot({ path: "1.png" });

    // Add a wait for some selector on the home page to load to ensure the next step works correctly
    await page.waitFor(3000);

    await page.screenshot({ path: "2.png" });
    await page.goto(`https://www.instagram.com/${req.params.user}/`);

    await page.waitForSelector(".NCYx-", {
      visible: true,
    });

    await page.screenshot({ path: "3.png" });
    await page.click("img.NCYx-");
    await page.setRequestInterception(true);
    page.on("response", async (response) => {
      console.log(response.url());
      const data = await response.json();
      console.log(data);
      if (data.data.reels_media) {
        console.log("masuk");
        return res
          .status(200)
          .json({ data: data.data.reels_media, url: response.url() });
      }
    });
    await page.waitFor(1000);
    await page.screenshot({ path: "4.png" });

    await page.waitFor(1000);

    await page.screenshot({ path: "5.png" });
    await browser.close();
  }
}

module.exports = InstagramController;
