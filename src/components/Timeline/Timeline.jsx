import React from 'react';
import "./Timeline.css";


export default function Timeline(){
    return(
<div>
<section className="intro">
    <div className="container">
      <h1> Timeline ↓</h1>
    </div>
  </section>
  <section className="timeline">
    <ul>
      <li>
        <div>
          <time>2016</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
        </div>
      </li>
      <li>
        <div>
          <time>2016</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>2017</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>2018</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>2020</time> Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.
        </div>
      </li>
      <li>
        <div>
          <time>2021</time> Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.
        </div>
      </li>
      
    </ul>
  </section>
    </div>
    );
}