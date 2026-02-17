
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/selectel-test-task/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/selectel-test-task/home",
    "route": "/selectel-test-task"
  },
  {
    "renderMode": 2,
    "route": "/selectel-test-task/home"
  },
  {
    "renderMode": 2,
    "route": "/selectel-test-task/menu"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 451, hash: '5aaba57f6eb61ee9b1546c688981fb12585697c83eb2c167a19b7fda17ac13b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: 'bdb5735bce61af22ffbd8b09ff066fa4496ed20ed00478b1da6d81f7273e1575', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 7291, hash: 'bb43c03b03f8c4569261b34ab34156ce8115524bdd5711171f670c596340f9ac', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 2016, hash: '122d4aef68d042a70a6e80d9ee09ce5650f4e2ba1052231e38c135c94ad70ead', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
