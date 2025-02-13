const nav = [
  { text: "首页", link: "/" },
  { text: "开发导航", link: "/views/nav/" },
  {
    text: "前端开发",
    items: [
      {
        text: "tailwindcss 🦄",
        link: "/views/tailwindcss/tailwindcss.md",
      },
      {
        text: "css 🦄",
        link: "/views/css/css.md",
      },
      {
        text: "构建工具 🦄",
        link: "/views/build-tools/index.md",
      },
      {
        text: "Next.js 🦄",
        link: "/views/nextjs/nextjs.md",
      },
      {
        text: "Mock.js 🦄",
        link: "/views/mockjs/index.md",
      }
    ],
  },
  {
    text: "后端开发",
    items: [
      {
        text: "Nest专栏",
        items: [],
      },
    ],
  },
];

export default nav;
