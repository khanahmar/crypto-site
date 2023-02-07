import React from "react";
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

export default function Home(){
    return <>
    <div className="home">
      <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3">
      <div>
      <h1>Who we are ? </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas veritatis! Dicta similique neque inventore exercitationem, deleniti eum perspiciatis pariatur vel repudiandae adipisci distinctio aspernatur ratione nisi quo modi facere assumenda hic. Laborum nisi ut velit molestiae est iure quod pariatur laboriosam debitis impedit commodi cupiditate iste, iusto sunt mollitia?</p>
    </div>
    </div>

    <div className="home4">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.4s"
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s"
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s"
          }}>
            <AiFillYoutube />
            <p>YouTube</p>
          </div>
          <div style={{
            animationDelay:"1s"
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
}