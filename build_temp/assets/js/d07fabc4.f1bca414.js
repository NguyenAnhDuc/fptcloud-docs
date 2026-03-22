"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[63208],{

/***/ 966429
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_monitoring_benchmark_sysbench_md_d07_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-monitoring-benchmark-sysbench-md-d07.json
const site_docs_managed_fpt_database_engines_new_monitoring_benchmark_sysbench_md_d07_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/monitoring/benchmark-sysbench","title":"2. Managed – FPT Database Engines","description":"Kết quả Benchmark Sysbench","source":"@site/docs/managed-fpt-database-engines-new/monitoring/benchmark-sysbench.md","sourceDirName":"managed-fpt-database-engines-new/monitoring","slug":"/managed-fpt-database-engines-new/monitoring/benchmark-sysbench","permalink":"/managed-fpt-database-engines-new/monitoring/benchmark-sysbench","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"C32G | 64 | 6448036 | 1842199 | 15350.46 | 767.49","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=benchmark-sysbench","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Giám sát & Báo cáo","permalink":"/managed-fpt-database-engines-new/monitoring/"},"next":{"title":"Log","permalink":"/managed-fpt-database-engines-new/monitoring/log"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/monitoring/benchmark-sysbench.md


const frontMatter = {
	sidebar_label: 'C32G | 64 | 6448036 | 1842199 | 15350.46 | 767.49',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=benchmark-sysbench',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Giới thiệu Benchmark Sysbench",
  "id": "1-giới-thiệu-benchmark-sysbench",
  "level": 3
}, {
  "value": "Mục đích:",
  "id": "mục-đích",
  "level": 4
}, {
  "value": "Database engine được benchmark:",
  "id": "database-engine-được-benchmark",
  "level": 4
}, {
  "value": "Chỉ số đo lường:",
  "id": "chỉ-số-đo-lường",
  "level": 4
}, {
  "value": "2. Kết quả benchmark theo database engine",
  "id": "2-kết-quả-benchmark-theo-database-engine",
  "level": 3
}, {
  "value": "2.1. PostgreSQL",
  "id": "21-postgresql",
  "level": 4
}, {
  "value": "C32G | 64 | 6448036 | 1842199 | 15350.46 | 767.49",
  "id": "c32g--64--6448036--1842199--1535046--76749",
  "level": 2
}, {
  "value": "C64G | 64 | 6926948 | 1979031 | 16489.02 | 824.41",
  "id": "c64g--64--6926948--1979031--1648902--82441",
  "level": 2
}, {
  "value": "2.2. MySQL",
  "id": "22-mysql",
  "level": 4
}, {
  "value": "C32G | 64 | 9786238 | 2796068 | 23289.48 | 1164.47",
  "id": "c32g--64--9786238--2796068--2328948--116447",
  "level": 2
}, {
  "value": "2.3. MariaDB",
  "id": "23-mariadb",
  "level": 4
}, {
  "value": "C32G | 64 | 10267208 | 2568032 | 24444.58 | 1222.23",
  "id": "c32g--64--10267208--2568032--2444458--122223",
  "level": 2
}, {
  "value": "C64G | 64 | 10789884 | 2719241 | 25688.30 | 1284.42",
  "id": "c64g--64--10789884--2719241--2568830--128442",
  "level": 2
}, {
  "value": "3. Nhận định &amp; Khuyến nghị",
  "id": "3-nhận-định--khuyến-nghị",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "Kết quả Benchmark Sysbench"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục này trình bày kết quả benchmark hiệu năng cơ sở dữ liệu được thực hiện bằng công cụ Sysbench, nhằm cung cấp thông tin tham khảo về khả năng xử lý của các database engine trên các cấu hình tài nguyên (flavor) khác nhau."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả benchmark chỉ mang tính tham khảo và không đảm bảo hiệu năng thực tế."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-giới-thiệu-benchmark-sysbench",
      children: "1. Giới thiệu Benchmark Sysbench"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mục-đích",
      children: "Mục đích:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Benchmark Sysbench được sử dụng để:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đánh giá hiệu năng xử lý OLTP (Read/Write) của các database engine."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quan sát mức độ cải thiện hiệu năng khi tăng tài nguyên CPU và RAM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cung cấp dữ liệu tham khảo để người dùng lựa chọn cấu hình phù hợp."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "database-engine-được-benchmark",
      children: "Database engine được benchmark:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các database engine được benchmark trong tài liệu này bao gồm: PostgreSQL, MySQL và MariaDB."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chỉ-số-đo-lường",
      children: "Chỉ số đo lường:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả benchmark bao gồm các chỉ số chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sysbench Read"
        }), " : Tổng số truy vấn đọc được thực hiện trong quá trình benchmark."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sysbench Write"
        }), " : Tổng số truy vấn ghi được thực hiện trong quá trình benchmark."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QPS (Queries Per Second)"
        }), " : Số lượng truy vấn trung bình xử lý mỗi giây."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TPS (Transactions Per Second)"
        }), " : Số lượng transaction hoàn chỉnh trung bình mỗi giây."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các chỉ số QPS và TPS được sử dụng làm cơ sở để đánh giá hiệu năng tổng thể của hệ thống. Giá trị QPS và TPS càng cao thể hiện throughput của hệ thống càng tốt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-kết-quả-benchmark-theo-database-engine",
      children: "2. Kết quả benchmark theo database engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-postgresql",
      children: "2.1. PostgreSQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Môi trường kiểm thử:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Thông số"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Giá trị"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Công cụ benchmark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysbench (OLTP Read/Write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng bảng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số bản ghi trên mỗi bảng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loại workload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/Write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số luồng (threads)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cấu hình tương ứng với từng flavor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phiên bản PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL 17"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flavor (vCPU/RAM)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Số luồng (threads)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sysbench Read (Đơn vị: lần)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sysbench Write (Đơn vị: lần)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TPS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2C4G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2595600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "741590"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6177.66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "308.88"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2C8G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2481276"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "708929"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5905.53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "295.27"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4C8G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3189018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "911134"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7589.71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "379.48"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8C16G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4829286"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1379738"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11496.20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "574.79"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8C32G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5679842"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1622732"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13519.46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "675.94"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c32g--64--6448036--1842199--1535046--76749",
      children: "C32G | 64 | 6448036 | 1842199 | 15350.46 | 767.49"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c64g--64--6926948--1979031--1648902--82441",
      children: "C64G | 64 | 6926948 | 1979031 | 16489.02 | 824.41"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-mysql",
      children: "2.2. MySQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Môi trường kiểm thử:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Thông số"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Giá trị"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Công cụ benchmark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysbench (OLTP Read/Write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng bảng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số bản ghi trên mỗi bảng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loại workload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/Write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số luồng (threads)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cấu hình tương ứng với từng flavor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phiên bản MySQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL 8.0.42"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flavor (vCPU/RAM)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Số luồng (threads)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sysbench Read (Đơn vị: lần)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sysbench Write (Đơn vị: lần)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TPS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4C8G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6814500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1947000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16224.39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "811.22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8C16G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9748144"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2785184"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23209.29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1160.46"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8C32G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9423834"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2692524"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22430.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1121.53"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c32g--64--9786238--2796068--2328948--116447",
      children: "C32G | 64 | 9786238 | 2796068 | 23289.48 | 1164.47"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-mariadb",
      children: "2.3. MariaDB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Môi trường kiểm thử:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Thông số"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Giá trị"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Công cụ benchmark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sysbench (OLTP Read/Write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng bảng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số bản ghi trên mỗi bảng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loại workload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/Write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Số luồng (threads)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cấu hình tương ứng với từng flavor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phiên bản MariaDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MariaDB 8.0.42"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flavor (vCPU/RAM)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Số luồng (threads)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sysbench Read (Đơn vị: lần)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sysbench Write (Đơn vị: lần)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TPS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4C8G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10573514"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2111341"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25174.34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1258.72"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8C16G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8923236"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2094628"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21245.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1062.26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8C32G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8491182"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2086388"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20216.52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1010.83"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c32g--64--10267208--2568032--2444458--122223",
      children: "C32G | 64 | 10267208 | 2568032 | 24444.58 | 1222.23"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c64g--64--10789884--2719241--2568830--128442",
      children: "C64G | 64 | 10789884 | 2719241 | 25688.30 | 1284.42"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-nhận-định--khuyến-nghị",
      children: "3. Nhận định & Khuyến nghị"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Việc tăng CPU và RAM nhìn chung giúp cải thiện throughput."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mỗi database engine có đặc điểm scale khác nhau."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ở cấu hình cao, mức tăng hiệu năng có thể chậm lại tuỳ theo workload và giới hạn hệ thống."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý quan trọng:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả benchmark phụ thuộc vào workload và chỉ mang tính tham khảo."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hiệu năng thực tế có thể khác biệt tuỳ thuộc vào:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Đặc điểm workload của ứng dụng."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Schema và index của cơ sở dữ liệu."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tỷ lệ đọc/ghi."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cấu hình storage và network."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nên thực hiện benchmark với workload thực tế trước khi triển khai môi trường production."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khuyến nghị:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng kết quả benchmark như dữ liệu tham khảo khi lựa chọn database engine và cấu hình tài nguyên. Để đạt hiệu năng tối ưu, nên kiểm thử với workload thực tế của ứng dụng."
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