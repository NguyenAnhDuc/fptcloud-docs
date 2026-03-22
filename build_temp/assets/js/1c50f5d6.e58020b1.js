"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[86197],{

/***/ 968687
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_huong_dan_su_dung_grafana_monitoring_xem_thong_tin_metric_md_1c5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-huong-dan-su-dung-grafana-monitoring-xem-thong-tin-metric-md-1c5.json
const site_docs_huong_dan_su_dung_grafana_monitoring_xem_thong_tin_metric_md_1c5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"huong-dan-su-dung-grafana/monitoring/xem-thong-tin-metric","title":"2. Hướng dẫn sử dụng Grafana","description":"4.2. Xem thông tin metric","source":"@site/docs/huong-dan-su-dung-grafana/monitoring/xem-thong-tin-metric.md","sourceDirName":"huong-dan-su-dung-grafana/monitoring","slug":"/huong-dan-su-dung-grafana/monitoring/xem-thong-tin-metric","permalink":"/huong-dan-su-dung-grafana/monitoring/xem-thong-tin-metric","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Xem thong tin metric","title":"2. Hướng dẫn sử dụng Grafana","source":"https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=xem-thong-tin-metric","parent":"https://fptcloud.com/documents/huong-dan-su-dung-grafana","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xem thong tin logs","permalink":"/huong-dan-su-dung-grafana/monitoring/xem-thong-tin-logs"},"next":{"title":"Xem thong tin monitor","permalink":"/huong-dan-su-dung-grafana/monitoring/xem-thong-tin-monitor"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/huong-dan-su-dung-grafana/monitoring/xem-thong-tin-metric.md


const frontMatter = {
	sidebar_label: 'Xem thong tin metric',
	title: '2. Hướng dẫn sử dụng Grafana',
	source: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=xem-thong-tin-metric',
	parent: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Hướng dẫn sử dụng Grafana';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-hướng-dẫn-sử-dụng-grafana",
        children: "2. Hướng dẫn sử dụng Grafana"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.2. Xem thông tin metric"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể theo dõi các chỉ số hiệu suất, tài nguyên và trạng thái của Cluster trực tiếp trên Dashboard Grafana."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu, bạn chọn Explore"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(287957)/* ["default"] */ .A) + "",
        width: "248",
        height: "464"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn datasource: mimir"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn loại metric"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn label filters mong muốn"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(285889)/* ["default"] */ .A) + "",
        width: "1367",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bạn có thể thêm nhiều label bằng cách click icon ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "Alt text",
            src: (__webpack_require__(863889)/* ["default"] */ .A) + "",
            width: "64",
            height: "59"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hoặc xem metric trong một khoảng thời gian mong muốn, chọn filter thời gian"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(842684)/* ["default"] */ .A) + "",
        width: "1012",
        height: "692"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run query"
      }), " và hệ thống sẽ trả ra kết quả tương ứng"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Ảnh minh họa"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(311688)/* ["default"] */ .A) + "",
        width: "1117",
        height: "542"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-tich-hop-k8s",
        children: " Previous 4.1. Hướng dẫn tích hợp "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-logs",
        children: " Next 4.3. Xem thông tin logs "
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 311688
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0072eac57cbd-Screenshot_26-f43ee5ca33c157b208ad1872d27e1271.png");

/***/ },

/***/ 842684
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/639736f9262e-Screenshot_25-f4380a743a6f7e8d5761eaef82a9acef.png");

/***/ },

/***/ 863889
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASySURBVGhD7Zv7U1tFFMf9U1Qg5P1+3iQ3gZAQilDaYq3QB5YWRynqbz7GcbSjY7X0OUJCCcVKghAYlVApdDoy0FrHcXSm4/j3fD1n00QesUIQyCX3h+9k5mb37J7Pnn3dvfvci3UGrFVtvQlagw0Wuw9Ojwy3NwS3j8S/ShHXl+TyyrA5/dCbnKjTmtf5WdAmAFq9DVZy3is1IhiKIdQQV6zkcDOkYAQOVwAGglCjMeKFWv06f4sA+A+WyeqBzx+BhwC4vWFBUaniKPBIYfgCEdgJwpYAWB0SgkTOIzUIcnaXX7FyuP3UiDL5EyMYYdG9n6/RPRuAzSmJ8GFyeSMBxYrr7/QERVfwUoNuCYCdBo1wY8uBAhBq2AaAqo8AFYAKQAWgAlABqABUACqAvQGwu/bVCKhkAGy7IN51lkqzU1UkALtLErabmtvR0noMsXgHpGDTLpVVgQBMVjcam1rx3gefYvBKEp9cvIIjx7phtnlE2aXylKuKBGAwO9Hc0oHrN1LIZu8hNTaNk6f7CIyrSgBYnBT2h0XrZybnMXJrEt2nzovIqDoAk1UJgLpAdEMEdAkA3AV8JfOUq30FwHaM5JTe5CCn89KTajQGyGT/0pdDmEjPYTgxgc5XzlDljNAabf+kFfmcsDp8Zddj3wBwoV5/I6LNh9Ha9jIOvdRZVCTWhq6T5zA0/A1mZpdw58536B94V0yL8dajxXScL37oCAJylOzJJcv5L+05AE5vp+Utv1JvbTuOjy9exWgqi8TIZF7JDL4ansDt8VksLDzC8vLvuH//V9EVhuj5MP2fSObTjaamcfXaKF7t7oUvGBGOlFOfvQdA4tY/2nmKwjuNxcVfMH/3YVG53AoW7j3GysoTPP75Lzx6+CeWCEJuflWokI7zfTv1I3r73oJfRIGSAFBh7R1duDyYxHR2kVr4blET6RyyM0t48OA3rK4+oSj4A9//8JN4ns7MF9NxvlujUzjd84ZYKSoCQEF8LCWH4zh+ogdnzw2gp/cCes6y+mnK68PA2+9j/OtZzM0tY2p6AR9+dIkWQ6/jzGtvPk13QeTjZzw28BFX3rZCALDYDi9vjRbXOtVqTQhHWvAFzQJpmgUSybQApdGZxci/Ni2vDaw7mBr3FQDnZVs8ja2VjqY6ngkuDyaQyeSQHMmIgY6dZ2Br03L+ndZh3wD8m9SlcNUDoNVdjHaD166nxEifGsuKwa5qdoM8uPHI/tnnNzF2ewY3bo7jRFdv9UQAD25+uUksh8/3vUNTXz+aYu3i+f9dXkUCYJu8TgiGoqKcYIi/Rtm9sioOQEFcMQbBGx2nO1gyzU5V0QDYNpfFL0l3q5yKBrAXUgGoAFQAKgAVgApABaAC2BaAg/itsLydb4XVj6Udkji6OhD3BUhi50ldwLPV+wJmm1e8h2cATnd5R1KVIhe1vscXgv/puUKNZgsAdEaHaHk+3eETGb43pFQFQlFIgQiBkGGyuJ99ZaYgvl3FF4wctEf3BQgC0eMDSn6LoxRxfVnCeW9IOF+vs6zzs6BNAGrqjKilUKnTWlCvtypeGnKc+z63/kZfWZsAsPLdQSf6y0HQxrBfq5IAqklVDsCAvwHcRE9JsqMYdAAAAABJRU5ErkJggg==");

/***/ },

/***/ 285889
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b0dab0dfe423-Screenshot_23-a91a282ee4ec629f914ada8b55ce1f95.png");

/***/ },

/***/ 287957
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f2b7b75d09ea-Screenshot_22-0c442eeebbd0e8677c4419c2fb9fe839.png");

/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);