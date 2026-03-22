"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[35582],{

/***/ 61131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_instance_group_create_instance_group_md_2dc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-instance-group-create-instance-group-md-2dc.json
const site_docs_cloud_server_instance_group_create_instance_group_md_2dc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/instance-group/create-instance-group","title":"Khởi tạo một Instance Group mới","description":"*","source":"@site/docs/cloud-server/instance-group/create-instance-group.md","sourceDirName":"cloud-server/instance-group","slug":"/cloud-server/instance-group/create-instance-group","permalink":"/cloud-server/instance-group/create-instance-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khởi tạo một Instance Group mới","title":"Khởi tạo một Instance Group mới","source":"https://fptcloud.com/documents/cloud-server/?doc=create-instance-group","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Gắn máy ảo vào Instance Group","permalink":"/cloud-server/instance-group/add-instance-instance-group"},"next":{"title":"Xóa một Instance Group","permalink":"/cloud-server/instance-group/delete-instance-group"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/instance-group/create-instance-group.md


const frontMatter = {
	sidebar_label: 'Khởi tạo một Instance Group mới',
	title: 'Khởi tạo một Instance Group mới',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=create-instance-group',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Khởi tạo một Instance Group mới';

const assets = {

};



const toc = [{
  "value": "<strong>Đối với người dùng sử dụng tài nguyên loại General</strong>",
  "id": "đối-với-người-dùng-sử-dụng-tài-nguyên-loại-general",
  "level": 3
}, {
  "value": "<strong>Đối với người dùng sử dụng tài nguyên loại Specific</strong>",
  "id": "đối-với-người-dùng-sử-dụng-tài-nguyên-loại-specific",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
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
        id: "khởi-tạo-một-instance-group-mới",
        children: "Khởi tạo một Instance Group mới"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "đối-với-người-dùng-sử-dụng-tài-nguyên-loại-general",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với người dùng sử dụng tài nguyên loại General"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể khởi tạo một instance group mới với các thao tác:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(900057)/* ["default"] */ .A) + "",
        width: "944",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin theo yêu cầu của hệ thống:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên instance group."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Policy"
          }), " : Tùy chọn chính sách Soft Affinity hoặc Soft Anti Affinity để áp dụng cho instance group người dùng đang tạo"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Hệ thống hỗ trợ tạo tối đa 10 instance groups, và mỗi instance group chỉ có thể gắn với tối đa 10 instances."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(227670)/* ["default"] */ .A) + "",
        width: "944",
        height: "445"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance group"
      }), ". Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, instance group mới sẽ được hiển thị ở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(451301)/* ["default"] */ .A) + "",
        width: "944",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Hệ thống không hỗ trợ chỉnh sửa instance group trên resource general, chỉ hỗ trợ xóa để tạo lại instance group mới."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "đối-với-người-dùng-sử-dụng-tài-nguyên-loại-specific",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với người dùng sử dụng tài nguyên loại Specific"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đối với loại tài nguyên specific, khởi tạo một instance group với các thao tác sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(74790)/* ["default"] */ .A) + "",
        width: "944",
        height: "466"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin theo yêu cầu của hệ thống:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên instance group."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Policy"
          }), " : Tùy chọn chính sách Soft Affinity hoặc Soft Anti Affinity để áp dụng cho instance group người dùng đang tạo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Instances"
          }), " : Người dùng cần chọn ít nhất 2 instance để tạo instance group"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(751951)/* ["default"] */ .A) + "",
        width: "944",
        height: "721"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Danh sách instance chỉ liệt kê các máy ảo có trạng thái: Running, Stopped."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mỗi VPC được tạo tối đa 10 instance group, mỗi instance group tối đa 10 instance."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./overview-affinity",
        children: " Previous Giới thiệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./overview-bell",
        children: " Next Notification Bell "
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

/***/ 227670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3904ea381fa2-image-1718787364108-bf8bbd004dcd6be74f447893b3ebfda2.png");

/***/ },

/***/ 451301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4ac3fdff23d4-image-1718787383248-f4354c0abe5d46339ed341a33d360b9c.png");

/***/ },

/***/ 74790
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5397586a1f4f-image-1718787551692-63001cdc11a5a8bc0986df1eebac4c2b.png");

/***/ },

/***/ 900057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/df6818249661-image-1718787333684-a3b6997d2b07d3b8e943b7b66c48e909.png");

/***/ },

/***/ 751951
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fd673a1f32ef-image-1718787564579-6443cd4ddf8e42d14dcfbcc276bc862e.png");

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