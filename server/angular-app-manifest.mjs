
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/test-app/home",
    "route": "/test-app"
  },
  {
    "renderMode": 2,
    "route": "/test-app/home"
  },
  {
    "renderMode": 2,
    "route": "/test-app/menu"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 441, hash: 'e8f78cb1e0c1767802734e1d70421259f378a49468edc0f13affda8022c54ad3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '69d8feaf34b1e5f31284e5852a98f124c7a2be7616ec4f5dbe56b37730c9b03e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 1996, hash: '06f8215ec569261805566eb7ab5746721bc042f08def3a90f97c193242427990', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 7271, hash: '611a7652771711a189be9dcb778b627f4fceb05174bc77570d68d03fd8020894', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
