import React from "react";
import {
  useHistory
} from "react-router-dom";
import "./Home.css";
import Form from "react-bootstrap/Form";
import NavbarHome from '../components/navbarhome.js';

export default function Home() {
  const history = useHistory();

  return (
    <div style={{ background: "#F8F5F5" }} className="vh-100">
      <NavbarHome />
      <div className="bg-home">
        <div style={{ width: "40%" }} className="mb-3">
          <h1 className="bg-text">
            Search, pin, save your favorite instagram stories.
          </h1>
        </div>
        <div style={{width: "60vw"}}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1" className="shadow rounded-pill">
              <Form.Control className="form-home rounded-pill" type="email" placeholder="Search username..." />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="footer-home mt-4">
        <h3 style={{fontWeight: 800, color: "#333333"}}>Recommended user</h3>
        <div className="mt-3" style={{display: "flex"}}>
          <div className="rc-home rounded-circle shadow-sm">
            <img onClick={() => history.push("/taylorswift")} className="rounded-circle" alt="therock" src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/110606554_274256377193351_7760278100826446941_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1&_nc_ohc=a2ASxRZ9bogAX9eIMCh&oh=c85567168ed42c608b7afda6f018232a&oe=5F9062AE"/>
          </div>
          <div className="rc-home rounded-circle shadow-sm">
            <img onClick={() => history.push("/therock")} className="rounded-circle" alt="therock" src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/11850309_1674349799447611_206178162_a.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1&_nc_ohc=_WZKL_HFkjsAX-JxxZm&oh=645ef7e505d9df4899678195573ce4d7&oe=5F90E384"/>
          </div>
          <div className="rc-home rounded-circle shadow-sm">
            <img onClick={() => history.push("/justinbieber")} className="rounded-circle" alt="therock" src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/118803455_120863839516646_4281183625374452390_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1&_nc_ohc=7QlfQ2LZF1gAX-7F6na&oh=709524e8fbcdf65faa0883706fd9c95d&oe=5F924B7C"/>
          </div>
        </div>
      </div>
    </div>
  );
}
