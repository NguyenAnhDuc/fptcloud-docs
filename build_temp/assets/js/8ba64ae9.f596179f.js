"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[69363],{

/***/ 834183
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_resource_md_8ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-resource-md-8ba.json
const site_docs_managed_fpt_database_engines_new_resource_md_8ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/resource","title":"2. Managed – FPT Database Engines","description":"Quản lý tài nguyên cụm cơ sở dữ liệu","source":"@site/docs/managed-fpt-database-engines-new/resource.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/resource","permalink":"/managed-fpt-database-engines-new/resource","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Resource","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=resource","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Reporting","permalink":"/managed-fpt-database-engines-new/reporting"},"next":{"title":"Restore db","permalink":"/managed-fpt-database-engines-new/restore-db"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/resource.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Resource',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=resource',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Xem thông tin tài nguyên cơ sở dữ liệu",
  "id": "1-xem-thông-tin-tài-nguyên-cơ-sở-dữ-liệu",
  "level": 3
}, {
  "value": "2 Điều chỉnh tài nguyên cơ sở dữ liệu",
  "id": "2-điều-chỉnh-tài-nguyên-cơ-sở-dữ-liệu",
  "level": 3
}, {
  "value": "3. Điều chỉnh Storage Policy",
  "id": "3-điều-chỉnh-storage-policy",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý tài nguyên cụm cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tài nguyên của cụm cơ sở dữ liệu bao gồm Flavor (CPU – RAM) và dung lượng ổ đĩa dữ liệu (Data Disk Size)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý tài nguyên cụm cơ sở dữ liệu"
      }), " cho phép người dùng theo dõi và điều chỉnh các tài nguyên được cấp cho một cụm cơ sở dữ liệu, bao gồm CPU – RAM (Flavor), dung lượng ổ đĩa dữ liệu, và chính sách lưu trữ (Storage Policy), nhằm đáp ứng yêu cầu về hiệu năng và dung lượng trong quá trình vận hành."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thao tác chi tiết được trình bày trong phần hướng dẫn bên dưới."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-xem-thông-tin-tài-nguyên-cơ-sở-dữ-liệu",
      children: "1. Xem thông tin tài nguyên cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên thanh menu, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " > Chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Database"
      }), " hoặc hoặc chọn menu tương ứng với nhóm cơ sở dữ liệu phù hợp cluster > click vào Cluster ID > chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource"
      }), " để vào màn hình quản lý tài nguyên cơ sở dữ liệu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311371)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1550"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thông tin tài nguyên của cơ sở dữ liệu được hiển thị ở mục Resource Information với hai phần chính là: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Resource"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Available Resource"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current Resource"
        }), " : Hiển thị cấu hình tài nguyên hiện tại của cơ sở dữ liệu, bao gồm vCPU, RAM và dung lượng ổ đĩa dữ liệu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Available Resource"
        }), " : Hiển thị hạn mức tài nguyên tối đa có thể sử dụng để mở rộng cho cơ sở dữ liệu của mình, cũng bao gồm các thông tin: vCPU, RAM và dung lượng ổ đĩa dữ liệu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-điều-chỉnh-tài-nguyên-cơ-sở-dữ-liệu",
      children: "2 Điều chỉnh tài nguyên cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể thay đổi Flavor để tăng hoặc giảm tài nguyên compute (CPU – RAM) hoặc tăng dung lượng ổ đĩa dữ liệu trong phạm vi tài nguyên khả dụng (Available Resource). Thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý tài nguyên cơ sở dữ liệu"
      }), " , nhấp vào biểu tượng chỉnh sửa tài nguyên (biểu tượng hình bút chì) bên cạnh mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Resources"
      }), " để mở hộp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Database Resource"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(77184)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1225"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin cần điều chỉnh:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Để thay đổi cấu hình compute (vCPU – RAM), chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Flavor"
        }), " mong muốn từ danh sách thả xuống."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Để tăng dung lượng ổ đĩa dữ liệu, nhập giá trị mới vào trường ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Data disk size (GB)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), " để áp dụng thay đổi."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi xác nhận, trạng thái của cụm cơ sở dữ liệu sẽ chuyển sang “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resizing"
      }), " ”, và sau đó trở lại “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running"
      }), " ” khi quá trình hoàn tất."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thời gian cập nhật tài nguyên có thể kéo dài từ 5 – 10 phút. Trong thời gian này, vui lòng không thực hiện thêm thao tác nào khác trên database cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⚠️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý quan trọng:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Giới hạn tài nguyên"
        }), " : Người dùng chỉ có thể thay đổi tài nguyên trong phạm vi Available Resource (hạn mức khả dụng). Nếu cấu hình mới vượt quá hạn mức này, hệ thống sẽ hiển thị thông báo lỗi và không cho phép thực hiện thay đổi."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Không hỗ trợ giảm dung lượng ổ đĩa dữ liệu"
        }), "(Data disk size): Hệ thống không hỗ trợ giảm dung lượng ổ đĩa dữ liệu. Bạn chỉ có thể ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tăng"
        }), " dung lượng ổ đĩa, không thể giảm xuống thấp hơn dung lượng hiện tại."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Khởi động lại dịch vụ (Restart database cluster)"
        }), " : Khi thay đổi cấu hình tài nguyên compute, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "một số database engine yêu cầu khởi động lại cụm cơ sở dữ liệu"
        }), " để áp dụng cấu hình mới. Việc restart có thể được hệ thống thực hiện tự động hoặc yêu cầu người dùng chủ động thực hiện sau khi quá trình cập nhật tài nguyên hoàn tất. Quá trình khởi động lại có thể ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "gây gián đoạn dịch vụ tạm thời"
        }), ". Do đó, người dùng nên thực hiện các thay đổi này trong khung thời gian ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ít truy cập"
        }), " để giảm thiểu ảnh hưởng. Cụ thể như sau:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Hệ thống sẽ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "tự động khởi động lại dịch vụ khi giảm tài nguyên compute."
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Trong trường hợp ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "tăng tài nguyên compute"
            }), " , hệ thống sẽ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "không tự động khởi động lại"
            }), ". Riêng đối với ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL và ClickHouse"
            }), " , người dùng cần ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "thực hiện thêm thao tác restart"
            }), " sau khi cập nhật để cấu hình mới có hiệu lực."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-điều-chỉnh-storage-policy",
      children: "3. Điều chỉnh Storage Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Storage Policy ảnh hưởng trực tiếp đến hiệu suất I/O và chi phí vận hành của cơ sở dữ liệu. Người dùng có thể cập nhật chính sách này theo hướng dẫn dưới đây:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý tài nguyên cơ sở dữ liệu"
      }), " , nhấp vào biểu tượng chỉnh sửa chính sách lưu trữ (biểu tượng hình bút chì) bên cạnh mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Policy"
      }), " để mở hộp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Storage Policy"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(798078)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1230"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn Storage policy mới phù hợp với nhu cầu sử dụng từ danh sách dropdown và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), " để áp dụng thay đổi."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quá trình cập nhật Storage Policy có thể mất khoảng 5 – 10 phút. Trong thời gian này, không thực hiện bất kỳ thao tác nào khác trên database cluster để tránh ảnh hưởng đến hệ thống."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Khuyến nghị"
      }), " : Đối với môi trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "production"
      }), " , nên sử dụng Storage Policy có ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IOPS tối thiểu 4,000 (4K)"
      }), " để đảm bảo hiệu năng ổn định."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./push-s3",
        children: " Previous Đẩy dữ liệu backup lên S3 "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./parameter",
        children: " Next Quản lý Parameter "
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

/***/ 77184
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/002f98f3fa13-update-resource-scaled-a13f18a23753404155fb0ab2fca79a4f.png");

/***/ },

/***/ 798078
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4642a33c3b91-update-storage-policy-1-scaled-e72132b19b4daf230b6db4ec2014ac32.png");

/***/ },

/***/ 311371
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5cec940faa9d-view-resource-scaled-ea7caac87a7215a5c5fb0511b78897b0.png");

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