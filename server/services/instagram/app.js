const express = require("express");
const router = require('./Router');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

// app.use("/story", async (req, res) => {
//   const browser = await puppeteer.launch();
//   var page = await browser.newPage();
//
//   async function doLogin(url, username, password) {
//     await page.goto(url);
//
//     await page.waitForSelector('input[name="username"]');
//     await page.type('input[name="username"]', username);
//     await page.type('input[name="password"]', password);
//     await page.click('button[type="submit"]');
//   }
//
//   const cookiesPath = "./cookies.json";
//   const cookiesExists = fs.existsSync(cookiesPath);
//
//   if (cookiesExists) {
//     console.log("--------------------> cookies");
//     const cookiesString = fs.readFileSync("./cookies.json");
//     const cookies = JSON.parse(cookiesString);
//     await page.setCookie(...cookies);
//   } else {
//     console.log("--------------------> login");
//     await doLogin(
//       "https://www.instagram.com/accounts/login/",
//       "23tldr",
//       "bermaintembak2an"
//     );
//     await page.waitFor(2500);
//     const cookies = await page.cookies();
//     fs.writeFileSync("./cookies.json", JSON.stringify(cookies, null, 2));
//   }
//
//   await page.screenshot({ path: "1.png" });
//
//   // Add a wait for some selector on the home page to load to ensure the next step works correctly
//   await page.waitFor(2000);
//
//   await page.screenshot({ path: "2.png" });
//   await page.goto(`https://www.instagram.com/justinbieber`);
//
//   try {
//     await page.waitForSelector(".h5uC0", {
//       visible: true,
//       timeout: 2000,
//     });
//
//     await page.click("img._6q-tv");
//     console.log("clicking story");
//     await page.screenshot({ path: "3-testing.png" });
//
//     await page.setRequestInterception(true);
//     await page.on("response", async (response) => {
//       console.log(response.url());
//       const data = await response.json();
//       console.log(data);
//       if (data.data.reels_media) {
//         console.log("masuk");
//         res.send({ stories: data.data.reels_media[0].items });
//       }
//     });
//   } catch (err) {
//     console.log(err);
//     res.send({ story: [] });
//   }
//
//   await page.waitFor(2000);
//
//   await page.screenshot({ path: "4-testing.png" });
//
//   await page.waitFor(3000);
//
//   await page.screenshot({ path: "5-testing.png" });
//
//   await browser.close();
// });
//
// app.use("/highlight", async (req, res) => {
//   const browser = await puppeteer.launch();
//   var page = await browser.newPage();
//
//   async function doLogin(url, username, password) {
//     await page.goto(url);
//
//     await page.waitForSelector('input[name="username"]');
//     await page.type('input[name="username"]', username);
//     await page.type('input[name="password"]', password);
//     await page.click('button[type="submit"]');
//   }
//
//   const cookiesPath = "./cookies.json";
//   const cookiesExists = fs.existsSync(cookiesPath);
//
//   if (cookiesExists) {
//     console.log("--------------------> cookies");
//     const cookiesString = fs.readFileSync("./cookies.json");
//     const cookies = JSON.parse(cookiesString);
//     await page.setCookie(...cookies);
//   } else {
//     console.log("--------------------> login");
//     await doLogin(
//       "https://www.instagram.com/accounts/login/",
//       "23tldr",
//       "bermaintembak2an"
//     );
//     await page.waitFor(2500);
//     const cookies = await page.cookies();
//     fs.writeFileSync("./cookies.json", JSON.stringify(cookies, null, 2));
//   }
//
//   await page.screenshot({ path: "1.png" });
//
//   // Add a wait for some selector on the home page to load to ensure the next step works correctly
//   await page.waitFor(3000);
//
//   await page.screenshot({ path: "2.png" });
//   await page.goto(`https://www.instagram.com/politicaljokesid`);
//   await page.waitForSelector(".NCYx-", {
//     visible: true,
//   });
//
//   await page.screenshot({ path: "3.png" });
//   await page.click("img.NCYx-");
//   await page.setRequestInterception(true);
//   page.on("response", async (response) => {
//     console.log(response.url());
//     const data = await response.json();
//     console.log(data);
//     if (data.data.reels_media) {
//       console.log("masuk");
//       res.send({data: data.data.reels_media, url: response.url()});
//     }
//   });
//   await page.waitFor(1000);
//   await page.screenshot({ path: "4.png" });
//
//   await page.waitFor(1000);
//
//   await page.screenshot({ path: "5.png" });
//   await browser.close();
// });
//
// app.use("/", async (req, res) => {
//   let is_highlight = true;
//
//   if (is_highlight) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//
//     try {
//       await page.goto(`https://www.instagram.com/airgantra/`);
//       await page.waitForSelector(".NCYx-", {
//         visible: true,
//         timeout: 1000,
//       });
//       await browser.close();
//     } catch (err) {
//       is_highlight = false;
//       await browser.close();
//     }
//   }
//
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   axios
//     .get("https://www.instagram.com/politicaljokesid")
//     .then(async (resp) => {
//       const x = resp.data.match(
//         /(?<=<script type=\"text\/javascript\">window\._sharedData\s=\s).*?(?=<\/script>)/gim
//       );
//
//       const data = JSON.parse(x[0].slice(0, x[0].length - 1)).entry_data
//         .ProfilePage[0].graphql.user;
//
//       const biography = {
//         id: data.id,
//         username: data.username,
//         full_name: data.full_name,
//         is_private: data.is_private,
//         posts: data.edge_owner_to_timeline_media.count,
//         followers: data.edge_followed_by.count,
//         following: data.edge_follow.count,
//         description: data.biography,
//         external_url: data.external_url,
//         profile_pic: data.profile_pic_url,
//         profile_pic_hd: data.profile_pic_url_hd,
//       };
//
//       const posts = data.edge_owner_to_timeline_media.edges.map((x) => {
//         if (x.node.is_video) {
//           return {
//             id: x.node.id,
//             video_url: x.node.video_url,
//             views: x.node.video_view_count,
//             likes: x.node.edge_liked_by.count,
//             uploaded_at: x.node.taken_at_timestamp,
//           };
//         }
//
//         return {
//           id: x.node.id,
//           image_url: x.node.display_url,
//           likes: x.node.edge_liked_by.count,
//           uploaded_at: x.node.taken_at_timestamp,
//         };
//       });
//
//       const igtv = data.edge_felix_video_timeline.edges.map((x) => {
//         const data = {
//           id: x.node.id,
//           thumbnail: x.node.display_url,
//           video_url: x.node.video_url,
//           views: x.node.video_view_count,
//           likes: x.node.edge_media_preview_like,
//           uploaded_at: x.node.taken_at_timestamp,
//         };
//
//         return data;
//       });
//
//       console.log(is_highlight)
//
//       if (is_highlight) {
//         console.log('masukkkkkkkkkkk')
//         await page.goto(`https://www.instagram.com/politicaljokesid/`);
//
//         await page.setRequestInterception(true);
//         page.on("response", async (response) => {
//           console.log(response.url());
//           const highlight_data = await response.json();
//           console.log(highlight_data);
//           if (highlight_data.data.user.edge_highlight_reels) {
//             console.log("masuk");
//             await browser.close();
//             return res.send({
//               biography,
//               posts,
//               igtv,
//               highlight: highlight_data.data.user.edge_highlight_reels.edges,
//             });
//           } else {
//             await browser.close();
//             return res.send({ biography, posts, igtv, highlight: "highlight cannot be fetch try again" });
//           }
//         });
//       } else {
//         res.send({ biography, posts, igtv, highlight: [] });
//         await browser.close();
//       }
//     })
//     .catch((err) => res.send(err));
// });

app.listen(PORT, () => console.log("at port 3000"));

// https://www.instagram.com/graphql/query/?query_hash=90709b530ea0969f002c86a89b4f2b8d&variables=%7B%22reel_ids%22%3A%5B%5D%2C%22tag_names%22%3A%5B%5D%2C%22location_ids%22%3A%5B%5D%2C%22highlight_reel_ids%22%3A%5B%2217845283104730446%22%2C%2218029707210058591%22%2C%2217947754119282344%22%5D%2C%22precomposed_overlay%22%3Afalse%2C%22show_story_viewer_list%22%3Atrue%2C%22story_viewer_fetch_count%22%3A50%2C%22story_viewer_cursor%22%3A%22%22%2C%22stories_video_dash_manifest%22%3Afalse%7D
// https://www.instagram.com/graphql/query/?query_hash=90709b530ea0969f002c86a89b4f2b8d&variables=%7B%22reel_ids%22%3A%5B%5D%2C%22tag_names%22%3A%5B%5D%2C%22location_ids%22%3A%5B%5D%2C%22highlight_reel_ids%22%3A%5B%2217845283104730446%22%2C%2218029707210058591%22%2C%2217862002242272964%22%2C%2217947754119282344%22%5D%2C%22precomposed_overlay%22%3Afalse%2C%22show_story_viewer_list%22%3Atrue%2C%22story_viewer_fetch_count%22%3A50%2C%22story_viewer_cursor%22%3A%22%22%2C%22stories_video_dash_manifest%22%3Afalse%7D
