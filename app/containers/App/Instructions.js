import React from 'react';

const Instructions = () => (
  <article>
    <h1>Instructions</h1>
    <h2>About HCW Grabhub</h2>
    <p>
      Grabhub was generated using{' '}
      <a href="https://www.reactboilerplate.com/" target="_blank">
        React Boilerplate
      </a>
      , a boilerplate application developed by Max Stoiber for building scalable
      React Web applications. Please get started by familiarizing yourself with
      the project if you are not already. The boilerplate ships with an example
      app, an interface for fetching links to a Github user&#39;s repos.
      Normally when you use React Boilerplate, You remove the sample app by
      running <code>npm run clean</code> before beginning development. For
      Grabhub, we have kept the sample app and would like you to add another
      feature.
    </p>
    <h2>The Challenge</h2>
    <h3>The client has requested a new feature...</h3>
    <blockquote>
      <em>
        As a user, when I visit the home page, I see a field to enter a Github
        username. When I enter a username, above the user&#39;s repos, I see a
        link to a page with details about the user. On navigating to that page,
        I see the user&#39;s avatar, a link to their profile, a list of thier
        followers, thier organizations and some basic details, such as when they
        joined the system, where they are located, etc.
      </em>
    </blockquote>
    <p>
      Follow the established pattern to add the new feature. Maintain the 100%
      test coverage established in the repo.
    </p>
    <h3>But wait, there&#39;s more!</h3>
    <p>
      The client would like a reskinning of the app to match thier branding. A
      designer has added a style guide to the app{' '}
      <a
        target="_blank"
        href="https://github.com/HaughtCodeworks/front-end-technical-challenge/blob/master/grabhub_brand_identity.pdf"
      >
        available here
      </a>{' '}
      for download. Apply the new styles using your best judgment.
    </p>
    <h2>Resources</h2>
    <ul>
      <li>
        Try <code>curl https://api.github.com/users/__username__</code> from
        your terminal to get details about a github user.
      </li>
      <li>
        The boilerplate&#39;s{' '}
        <a
          target="_blank"
          href="https://github.com/HaughtCodeworks/front-end-technical-challenge#the-react-boilerplate-readme-follows"
        >
          readme
        </a>{' '}
        has been left largely intact and is packed with info about using the
        boilerplate.
      </li>
      <li>
        Feel free to add any libraries or tools you like to aid in development.
      </li>
      <li>
        Feel free to reach out with questions to{' '}
        <a href="mailto:jeneve.parrish@haughtcodeworks.com">Jeneve.</a>
      </li>
    </ul>
  </article>
);

export default Instructions;
