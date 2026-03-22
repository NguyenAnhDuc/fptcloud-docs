"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[62235],{

/***/ 670389
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_migration_cho_sqlserver_md_a94_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-migration-cho-sqlserver-md-a94.json
const site_docs_managed_fpt_database_engines_new_migration_cho_sqlserver_md_a94_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/migration-cho-sqlserver","title":"2. Managed – FPT Database Engines","description":"Migration cho SQL Server","source":"@site/docs/managed-fpt-database-engines-new/migration-cho-sqlserver.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/migration-cho-sqlserver","permalink":"/managed-fpt-database-engines-new/migration-cho-sqlserver","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Migration cho sqlserver","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=Migration-cho-SQLServer","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Maintenance","permalink":"/managed-fpt-database-engines-new/maintenance"},"next":{"title":"Monitoring","permalink":"/managed-fpt-database-engines-new/monitoring"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/migration-cho-sqlserver.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Migration cho sqlserver',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=Migration-cho-SQLServer',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

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
    strong: "strong",
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
      children: "Migration cho SQL Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Export Data Tier Application via SSMS tool"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connect to a SQL instance and expand databases in the object explorer. Right-click on a database in SSMS and you get data-tier application options as shown below."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(398601)/* ["default"] */ .A) + "",
        width: "624",
        height: "577"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Right-click on the source SQL Database and click on Export Data-tier application. It launches an introduction page. This introduction page defies the summary and high-level steps for this wizard. The high-level steps are as follows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(987936)/* ["default"] */ .A) + "",
        width: "624",
        height: "575"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " , and it takes you to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Export setting"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(172341)/* ["default"] */ .A) + "",
        width: "624",
        height: "577"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let’s use a local disk directory, as shown below."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(473412)/* ["default"] */ .A) + "",
        width: "624",
        height: "579"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By default, it extracts all schema, tables (with data) available in the database. We can also filter selected objects in the advanced page select all database schema, tables in the advanced tab of this page. Click on the advanced tab and review the objects. It groups objects per schema such as dbo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(408444)/* ["default"] */ .A) + "",
        width: "624",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We are not using any object filtering in BACPAC export. It will create an export for all tables in the database. Click on Next and review the configurations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97551)/* ["default"] */ .A) + "",
        width: "624",
        height: "543"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finish"
      }), " , and it starts the export of the database. You can see the success message for each step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997007)/* ["default"] */ .A) + "",
        width: "624",
        height: "542"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We can browse to the directory and verify a BACPAC extension file exists."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(709109)/* ["default"] */ .A) + "",
        width: "624",
        height: "74"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Import a BACPAC file using SSMS Import Data-tier Application wizard"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We can copy this BACPAC file to destination SQL instance having either on-premise or Azure SQL Database. Right-click on the connected destination instance and launch ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Import Data-tier applications"
      }), " wizard."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(950365)/* ["default"] */ .A) + "",
        width: "624",
        height: "539"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " , and it takes you to the import settings page. Here, we specify the path of a BACPAC file either from the local disk or Microsoft Azure Storage container. We used local disk storage during the import process so, select the local disk option and browse to the directory containing required BACPAC package."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(972786)/* ["default"] */ .A) + "",
        width: "624",
        height: "540"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the next page, we specify a setting for the new database. We cannot use an existing SQL Database for importing a BACPAC package."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It also requires input for the data and log file of this new database. By default, it shows you default data and log file location of connected SQL instance. We can change it per requirement."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(35522)/* ["default"] */ .A) + "",
        width: "624",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modify the new database name. In my demonstration, I specified AdventureWorksDW_BACPAC name for SQL Database. Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " and view summary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507369)/* ["default"] */ .A) + "",
        width: "624",
        height: "544"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The next page is a summary page showcasing your configurations. I recommend you always review it before proceeding. You can easily navigate back and make the required changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(37620)/* ["default"] */ .A) + "",
        width: "624",
        height: "541"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finish"
      }), " , and you can see the following steps. • Creates a new database • Imports schema and data into this new database • Disables indexes • Inserts data into tables • Enable indexes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(181506)/* ["default"] */ .A) + "",
        width: "624",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(232225)/* ["default"] */ .A) + "",
        width: "624",
        height: "543"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refresh the object explorer, and you see the newly restored database."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./clickhouse-use-ha",
        children: " Next ClickHouse - High Availability (HA) "
      })
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

/***/ 181506
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/044eccdb747d-2_Import_6-29d6fc05e3201e34b5017184813faa40.jpg");

/***/ },

/***/ 37620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1775aa973a39-2_Import_5-ffdc3b82657cc0ccf8ca155ae3993982.jpg");

/***/ },

/***/ 997007
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3d69fcc14a14-1_Export_7-96a797bd455e2d772bd1222614092423.jpg");

/***/ },

/***/ 408444
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/63599b2c83f8-1_Export_5-d3c070cb0c0946b5bb19bd4988bc9f6e.jpg");

/***/ },

/***/ 709109
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/64c675075e28-1_Export_8-19fd49019774e887b18a6de7b68aec1b.jpg");

/***/ },

/***/ 507369
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/737faea7c8e7-2_Import_4-a19af8357ec9dc6ae8fc526d66e1ff17.jpg");

/***/ },

/***/ 172341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7490f5a791c1-1_Export_3-c155af6a3e85a8c9eb6cb9a762038d80.jpg");

/***/ },

/***/ 232225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7ba3e5021b78-2_Import_7-fdae0596fd33a8dec3d060cadde61e90.jpg");

/***/ },

/***/ 97551
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/836722b955b3-1_Export_6-0285a6258edc8006558dd3d660055c8a.jpg");

/***/ },

/***/ 972786
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/83efdecd34db-2_Import_2-b3bad3fd96fb52984a7457683f33a4e4.jpg");

/***/ },

/***/ 473412
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8c6e3dca1191-1_Export_4-d721d889e7a639049102fbf8f19b679f.jpg");

/***/ },

/***/ 950365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9edba26201da-2_Import_1-eb1db1abf9865741360da88b78d08f10.jpg");

/***/ },

/***/ 987936
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d3f52e181479-1_Export_2-2be6693b4da88e84293bfb43a89158ab.jpg");

/***/ },

/***/ 398601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d4365f710a37-1_Export_1-6886b055f647697196ff055de6679328.jpg");

/***/ },

/***/ 35522
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e974b6e3e89e-2_Import_3-aa8ab16c41b6c8ed541015130d097613.jpg");

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