"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[4450],{

/***/ 476268
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_huong_dan_su_dung_grafana_huong_dan_tich_hop_k_8_s_md_7b4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-huong-dan-su-dung-grafana-huong-dan-tich-hop-k-8-s-md-7b4.json
const site_docs_huong_dan_su_dung_grafana_huong_dan_tich_hop_k_8_s_md_7b4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"huong-dan-su-dung-grafana/huong-dan-tich-hop-k8s","title":"2. Hướng dẫn sử dụng Grafana","description":"4.1. Hướng dẫn tích hợp","source":"@site/docs/huong-dan-su-dung-grafana/huong-dan-tich-hop-k8s.md","sourceDirName":"huong-dan-su-dung-grafana","slug":"/huong-dan-su-dung-grafana/huong-dan-tich-hop-k8s","permalink":"/huong-dan-su-dung-grafana/huong-dan-tich-hop-k8s","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan tich hop k8s","title":"2. Hướng dẫn sử dụng Grafana","source":"https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=huong-dan-tich-hop-k8s","parent":"https://fptcloud.com/documents/huong-dan-su-dung-grafana","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan tich hop database","permalink":"/huong-dan-su-dung-grafana/huong-dan-tich-hop-database"},"next":{"title":"Hướng dẫn sử dụng Grafana","permalink":"/huong-dan-su-dung-grafana/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/huong-dan-su-dung-grafana/huong-dan-tich-hop-k8s.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan tich hop k8s',
	title: '2. Hướng dẫn sử dụng Grafana',
	source: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=huong-dan-tich-hop-k8s',
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
      children: "4.1. Hướng dẫn tích hợp"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập chức năng Monitoring"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trên Console Portal, truy cập chi tiết một Cluster"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn tab Monitoring"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống hiển thị màn hình tích hợp Monitoring."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(213188)/* ["default"] */ .A) + "",
        width: "1364",
        height: "507"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tích hợp/huỷ tích hợp"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tích hợp (Integrate)"
      }), " : Bật thu thập metrics/logs cho cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại màn hình Monitoring, chọn hành động ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Integrate”"
        }), " ứng với workspace cần tích hợp"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<ảnh minh họa đang cập nhật>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<ảnh minh họa đang cập nhật>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sau khi tích hợp thành công, Integrated Status sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Enabled”"
        }), " , hệ thống FPT Monitoring bắt đầu thu thập các chỉ số tương ứng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<ảnh minh họa đang cập nhật>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Huỷ tích hợp (Disintegrate)"
      }), " : Tắt thu thập metrics/logs cho database cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tại màn hình Monitoring, chọn hành động ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "“Disintegrate”"
          }), " ứng với workspace cần huỷ giám sát."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Sau khi huỷ tích hợp thành công, Integrated Status sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "“Disabled”"
          }), " , hệ thống FPT Monitoring ngừng thu thập các chỉ số tương ứng."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<ảnh minh họa đang cập nhật>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Truy cập dashboard Grafana và xem thông tin monitoring"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sau khi tích hợp giám sát thành công (Integrated Status = “Enabled”), click vào Dashboard URL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<ảnh minh họa đang cập nhật>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Sau đó tích hợp các dashboard template tương ứng, tham khảo hướng dẫn tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3.1. Tích hợp Dashboard Template"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mở dashboard đã tích hợp và xem thông tin Monitoring"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Ảnh minh họa"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(167030)/* ["default"] */ .A) + "",
        width: "1365",
        height: "673"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tich-hop-monitoring-kubernetes",
        children: " Previous 4. Hướng dẫn tích hợp Monitoring Kubernetes "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-metric",
        children: " Next 4.2. Xem thông tin metric "
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

/***/ 167030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/31d7364e9895-Screenshot_21-f4676b9125e6bb0035e2856f394eba1f.png");

/***/ },

/***/ 213188
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/99aa1fa8a042-Screenshot_20-b03f9e1b34e62d9d1b1f1fd9f2c5412b.png");

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