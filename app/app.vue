<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      <Html
        lang="en"
        prefix="og: https://ogp.me/ns#"
      >
        <Head>
          <Meta charset="UTF-8" />
          <Link
            href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap"
            rel="stylesheet"
          />
          <Meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Title>Is PHP Dead Yet?!</Title>
          <Meta
            property="og:title"
            content="Is PHP Dead Yet?!"
          />
          <Meta
            property="og:type"
            content="website"
          />
          <Meta
            property="og:url"
            content="https://isphpdeadyet.vercel.app/"
          />
        </Head>
        <Body class="bg-white dark:bg-black dark:text-white font-general-sans">
          <AppHeader />
          <AppMain />
          <AppFooter />
        </Body>
      </Html>
    </div>
  </div>
</template>

<style>
body {
  font-size: 1.1rem;
}

strong {
  font-weight: 500;
}
</style>
