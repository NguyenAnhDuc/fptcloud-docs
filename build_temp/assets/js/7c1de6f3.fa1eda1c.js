"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[19158],{

/***/ 945437
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_management_version_policy_md_7c1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-management-version-policy-md-7c1.json
const site_docs_managed_fpt_database_engines_new_management_version_policy_md_7c1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/management/version-policy","title":"2. Managed – FPT Database Engines","description":"Chính sách version","source":"@site/docs/managed-fpt-database-engines-new/management/version-policy.md","sourceDirName":"managed-fpt-database-engines-new/management","slug":"/managed-fpt-database-engines-new/management/version-policy","permalink":"/managed-fpt-database-engines-new/management/version-policy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Version policy","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=Version-policy","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"| 17.7 | 08/2025 | 25/11/2025 | -- | --","permalink":"/managed-fpt-database-engines-new/management/version-list"},"next":{"title":"Vertical scaling","permalink":"/managed-fpt-database-engines-new/management/vertical-scaling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/management/version-policy.md


const frontMatter = {
	sidebar_label: 'Version policy',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=Version-policy',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Nguyên tắc chung",
  "id": "nguyên-tắc-chung",
  "level": 3
}, {
  "value": "Cấu trúc phiên bản",
  "id": "cấu-trúc-phiên-bản",
  "level": 3
}, {
  "value": "Vòng đời version (Version Lifecycle):",
  "id": "vòng-đời-version-version-lifecycle",
  "level": 3
}, {
  "value": "Khuyến nghị sử dụng",
  "id": "khuyến-nghị-sử-dụng",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chính sách version"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Database Engine áp dụng chính sách phiên bản database engine linh hoạt cho các loại cơ sở dữ liệu được cung cấp, nhằm đảm bảo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hệ thống luôn vận hành trên các phiên bản ổn định và được hỗ trợ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Người dùng được thông báo về lịch trình phát hành và thời gian kết thúc Hỗ trợ (EOS) của từng phiên bản để có phương án sử dụng phù hợp"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nguyên-tắc-chung",
      children: "Nguyên tắc chung"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Database Engine áp dụng các nguyên tắc chính sau trong quản lý phiên bản database engine:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hỗ trợ đồng thời nhiều phiên bản cho mỗi loại database engine, giúp người dùng lựa chọn phiên bản phù hợp với nhu cầu vận hành của mình."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Liên tục cập nhật và bổ sung các phiên bản mới phát hành từ cộng đồng phát triển để cải thiện tính năng, hiệu năng và bảo mật."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Không hỗ trợ nâng cấp tự động giữa các major version. Người dùng cần thực hiện migrate dữ liệu thủ công để đảm bảo tính toàn vẹn."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cấu-trúc-phiên-bản",
      children: "Cấu trúc phiên bản"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Database Engine tuân theo quy ước đánh số phiên bản được cộng đồng phát triển của từng database engine quy định. Cấu trúc phiên bản thường bao gồm hai thành phần chính: Phiên bản chính (Major Version) và Phiên bản phụ (Minor Version):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Thành phần"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Major version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thay đổi lớn về kiến trúc hoặc tính năng, có thể không tương thích với các phiên bản trước. Ví dụ: PostgreSQL 14 hoặc MySQL 8.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minor version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cập nhật nhỏ, sửa lỗi hoặc vá bảo mật, tương thích ngược. Ví dụ: MySQL 8.0.25"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể xem chính xác phiên bản đang sử dụng cho database của mình trực tiếp trên Console Portal khi kiểm tra thông tin chi tiết của database."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vòng-đời-version-version-lifecycle",
      children: "Vòng đời version (Version Lifecycle):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi phiên bản database engine tuân theo vòng đời gồm các giai đoạn sau:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Giai đoạn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1. Preview (Beta)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phiên bản đang trong giai đoạn thử nghiệm, chưa cam kết SLA, tính năng có thể thay đổi hoặc ngừng cung cấp bất kỳ lúc nào. Người dùng có thể trải nghiệm, thử nghiệm hoặc sử dụng cho môi trường non-production. Không khuyến nghị triển khai trên môi trường production."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trên Console Portal, phiên bản Beta được hiển thị kèm tag “Beta”."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2. General Availability (GA)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phiên bản đã ổn định, sẵn sàng cho môi trường production, hỗ trợ SLA chính thức."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3. Deprecated (Dep.)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Phiên bản không được khuyến nghị sử dụng cho triển khai mới, chuẩn bị ngừng hỗ trợ trong tương lai gần, nhưng vẫn hoạt động cho các hệ thống hiện tại. Đây là giai đoạn ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "báo trước"
            }), " việc ngừng hỗ trợ."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trên Console Portal, phiên bản deprecated được hiển thị kèm tag “Deprecated” hoặc “Dep.”."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4. End of Support (EoS)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phiên bản ngừng hỗ trợ hoàn toàn."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trên Console Portal, phiên bản end of support được hiển thị kèm tag “EoS”."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Người dùng nên chủ động nâng cấp trước khi phiên bản hiện tại chuyển sang giai đoạn Deprecated hoặc EoS để đảm bảo an toàn và ổn định cho hệ thống."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "khuyến-nghị-sử-dụng",
      children: "Khuyến nghị sử dụng"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tình huống"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hành động khuyến nghị"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database đang chạy phiên bản GA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiếp tục sử dụng bình thường."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database đang chạy phiên bản Beta"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theo dõi thông báo cập nhật thường xuyên, vì phiên bản có thể thay đổi hoặc bị gỡ bỏ mà không có thông báo trước."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database đang chạy phiên bản Deprecated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hạn chế triển khai mới và nên lên kế hoạch nâng cấp lên phiên bản mới hơn vì phiên bản này chuẩn bị ngừng hỗ trợ."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database đang chạy phiên bản EoS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theo dõi và lên kế hoạch nâng cấp sớm để đảm bảo hệ thống được hỗ trợ và ổn định."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./database-engine-version",
        children: " Previous Version database engine "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./version-list",
        children: " Next Danh mục version hỗ trợ "
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