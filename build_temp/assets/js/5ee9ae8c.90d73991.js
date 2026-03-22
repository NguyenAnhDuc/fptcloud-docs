"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[25866],{

/***/ 772309
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_hub_base_model_md_5ee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-hub-base-model-md-5ee.json
const site_docs_model_hub_base_model_md_5ee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-hub/base-model","title":"2. Model Hub","description":"Base model (v1.1)","source":"@site/docs/model-hub/base-model.md","sourceDirName":"model-hub","slug":"/model-hub/base-model","permalink":"/model-hub/base-model","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Base model","title":"2. Model Hub","source":"https://fptcloud.com/documents/model-hub/?doc=base-model","parent":"https://fptcloud.com/documents/model-hub","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Add share","permalink":"/model-hub/add-share"},"next":{"title":"Chi tiet model catalog","permalink":"/model-hub/chi-tiet-model-catalog"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-hub/base-model.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Base model',
	title: '2. Model Hub',
	source: 'https://fptcloud.com/documents/model-hub/?doc=base-model',
	parent: 'https://fptcloud.com/documents/model-hub',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Model Hub';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-model-hub",
        children: "2. Model Hub"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Base model (v1.1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục đích: thể hiện mối quan hệ, biến thể của model từ một model khác theo thứ tự model gốc phía trên, model đang xem chi tiết ở dưới cùng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện để tạo Base Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Tại menu AI Platform, chọn sub menu Private Model, click button Create để tạo model Hubmới"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Tại step 1, nhập đầy đủ các thông tin như Title, Description, Model visibility..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 3: Tại trường Base model, click vào dropdown list để chọn model hub cha của model hub đang tạo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(663910)/* ["default"] */ .A) + "",
        width: "624",
        height: "307"
      }), " Lưu ý: chỉ được phép chọn 1 base model. Trường này không bắt buộc, người dùng có thể để trống"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 4: Click button Next, tại step 2 Tags, thực hiện chọn lần lượt các tag cho Framework, Architecture, Subject, Task, Others"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 5: Click button Next, view lại toàn bộ thông tin của model hub đã tạo. Tại đây, người dùng sẽ thấy hiển thị thêm phần Base model như ví dụ dưới đây"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24653)/* ["default"] */ .A) + "",
        width: "624",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 6: Sau khi các thông tin đã đúng và đầy đủ, click button Create a model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 7: Hệ thống chuyển sang màn model list với model hub vừa tạo thành công"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 8: Đi đến màn hình chi tiết của model hub vừa tạo thành công, người dùng sẽ thấy hiển thị thêm phần Base model, kèm icon model relationship"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(428030)/* ["default"] */ .A) + "",
        width: "624",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Click vào icon Model relationship, hiển thị popup thể hiện quan hệ cha con giữa 2 model. Popup cho phép click vào Model hub name để đi đến màn hình chi tiết của Model hub tương ứng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(335131)/* ["default"] */ .A) + "",
        width: "624",
        height: "306"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./clone-model",
        children: " Previous Clone model (v1.1) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./create-organization",
        children: " Next Create organization (v1.1) "
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

/***/ 663910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/205447ff6a0a-anh-8-83edba97da58a1a4bb5196aff0dbfd04.png");

/***/ },

/***/ 335131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3de031d8d6f1-anh-11-60a68fd3bc77594b55c026022fc67a95.png");

/***/ },

/***/ 24653
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4ab19bb5fd7a-anh-9-4ef475a2623fe958bde59338831c2107.png");

/***/ },

/***/ 428030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5c5813041a99-anh-10-e679fb9a1e8f9394e2c72d2e6149d92a.png");

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