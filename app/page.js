'use client';
import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import { addMouseEffect } from "./mouse-effect";

export default function Home() {
  useEffect(() => {
    addMouseEffect();
  }, []);

  return (
    <main>
      <div id="mouse-effect"></div>
      <div className="row m-0">
        <div className={`col ${styles.leftSection}`}>
            <h1 style={{ color: '#e2e8f0' }}>Muhammad Rizky Maulana Darmawan</h1>
            <h4 className={`mb-4`} style={{ color: '#e2e8f0' }}>Fullstack Engineer</h4>
            <p className={`p-0 m-0`}>I build pixel-perfect, engaging, and</p>
            <p>accessible digital experiences.</p>
        </div>


        <div className={`col ${styles.rightSection}`}>
            <div id="about">
              <div className={`mb-5`}>
                <p>
                  Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                </p>
                <p>
                  My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                </p>
                <p>
                  When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seedsKorok seeds.
                </p>
              </div>
            </div>

            <div id="experience">
              <div className={`mb-2`}>
                <div className={`card mb-3 ${styles["experience-card"]}`} style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <p className="text-white p-3">2024 - Present</p>
                      {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-white">Card title</h5>
                        <p className="card-text text-white">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </p>
                        
                        <ul className={`d-flex flex-wrap list-unstyled`}>
                          <li className="d-flex align-items-center">
                            <p className={`${styles["card-text"]} mx-1 mb-0`}>
                              Javascript
                            </p>
                          </li>
                          <li className="d-flex align-items-center">
                            <p className={`${styles["card-text"]} mx-1 mb-0`}>
                              Laravel
                            </p>
                          </li>
                        </ul>
                        {/* <p className={`${styles["card-text"]}`}>
                          <small>Last updated 3 mins ago</small>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`mb-2`}>
                <div className={`card mb-3 ${styles["experience-card"]}`} style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <p className="text-white p-3">2024 - Present</p>
                      {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-white">Card title</h5>
                        <p className="card-text text-white">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </p>
                        
                        <ul className={`d-flex flex-wrap list-unstyled`}>
                          <li className="d-flex align-items-center">
                            <p className={`${styles["card-text"]} mx-1 mb-0`}>
                              Javascript
                            </p>
                          </li>
                          <li className="d-flex align-items-center">
                            <p className={`${styles["card-text"]} mx-1 mb-0`}>
                              Laravel
                            </p>
                          </li>
                        </ul>
                        {/* <p className={`${styles["card-text"]}`}>
                          <small>Last updated 3 mins ago</small>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`mb-2`}>
                <div className={`card mb-3 ${styles["experience-card"]}`} style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <p className="text-white p-3">2024 - Present</p>
                      {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-white">Card title</h5>
                        <p className="card-text text-white">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </p>
                        
                        <ul className={`d-flex flex-wrap list-unstyled`}>
                          <li className="d-flex align-items-center">
                            <p className={`${styles["card-text"]} mx-1 mb-0`}>
                              Javascript
                            </p>
                          </li>
                          <li className="d-flex align-items-center">
                            <p className={`${styles["card-text"]} mx-1 mb-0`}>
                              Laravel
                            </p>
                          </li>
                        </ul>
                        {/* <p className={`${styles["card-text"]}`}>
                          <small>Last updated 3 mins ago</small>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}
