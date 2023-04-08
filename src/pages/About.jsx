import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardHomePage from "../components/CardHomePage";

export default function LogIn() {
  return (
    <div className="background-color-home">
      <div className="home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          <div className="form-contact">
            <h1 className="fs-700 ff-title color-white text-shadow-pink">
              About this proyect, Stack, Chalenges & Solutions
            </h1>
          </div>
        </div>
        <article className="about-container color-white">
          <h1>Learning React & Firebase</h1>
          <h3>React 18, React router 6, CSS, HTML, Netlify.</h3>
          <div className="about-card">
            <CardHomePage
              card={{
                url: "https://bubulazy.com",
                title: "Visit My Portfolio",
                summary:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices neque ornare aenean euismod.",
                imgUrl: "/assets/images/retrato-sasa.png",
              }}
            />
          </div>
          <div className="parafo flow">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
              eget mauris pharetra et ultrices neque ornare aenean euismod.
              Malesuada fames ac turpis egestas sed tempus urna et. Habitasse
              platea dictumst quisque sagittis purus sit. Et leo duis ut diam
              quam nulla porttitor massa. Rhoncus dolor purus non enim praesent
              elementum facilisis. Fringilla est ullamcorper eget nulla
              facilisi. Tempus imperdiet nulla malesuada pellentesque elit eget
              gravida cum sociis. Consectetur adipiscing elit duis tristique
              sollicitudin nibh sit.
            </p>
            <p>
              Pulvinar etiam non quam lacus suspendisse faucibus interdum
              posuere. Est sit amet facilisis magna etiam tempor orci eu. Id
              faucibus nisl tincidunt eget nullam non nisi. Eget nulla facilisi
              etiam dignissim diam quis. In mollis nunc sed id. Magnis dis
              parturient montes nascetur. Nunc scelerisque viverra mauris in
              aliquam sem. Vestibulum rhoncus est pellentesque elit ullamcorper
              dignissim cras tincidunt. Luctus venenatis lectus magna fringilla
              urna.
            </p>
            <p>
              Lectus urna duis convallis convallis tellus. Nulla facilisi nullam
              vehicula ipsum a arcu cursus vitae. Pretium lectus quam id leo.
              Malesuada nunc vel risus commodo. Eget magna fermentum iaculis eu
              non diam. Mattis vulputate enim nulla aliquet porttitor lacus
              luctus accumsan tortor. Vitae nunc sed velit dignissim sodales ut
              eu. Libero nunc consequat interdum varius sit amet mattis.
              Fringilla urna porttitor rhoncus dolor purus non enim praesent..
            </p>
            <p>
              Posuere urna nec tincidunt praesent semper feugiat nibh sed.
              Consequat semper viverra nam libero justo laoreet sit amet cursus.
              Risus ultricies tristique nulla aliquet enim tortor at auctor
              urna. Viverra ipsum nunc aliquet bibendum enim facilisis gravida
              neque
            </p>
          </div>
          <img src="/assets/images/products/1-2.jpg" alt="sdasdasd" />
        </article>
        <Footer />
      </div>
    </div>
  );
}
