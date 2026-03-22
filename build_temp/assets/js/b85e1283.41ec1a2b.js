"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[8713],{

/***/ 153747
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_huong_dan_su_dung_open_metadata_md_b85_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-huong-dan-su-dung-open-metadata-md-b85.json
const site_docs_fpt_data_platform_huong_dan_su_dung_open_metadata_md_b85_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/huong-dan-su-dung-open-metadata","title":"2. FPT Data Platform","description":"Hướng dẫn sử dụng Open Metatdata","source":"@site/docs/fpt-data-platform/huong-dan-su-dung-open-metadata.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/huong-dan-su-dung-open-metadata","permalink":"/fpt-data-platform/huong-dan-su-dung-open-metadata","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan su dung open metadata","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=huong-dan-su-dung-open-metadata","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan secert backends","permalink":"/fpt-data-platform/huong-dan-secert-backends"},"next":{"title":"Các bước tạo connector:","permalink":"/fpt-data-platform/iceberg-logs-sink-connector"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/huong-dan-su-dung-open-metadata.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan su dung open metadata',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=huong-dan-su-dung-open-metadata',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "1. Tạo Service",
  "id": "1-tạo-service",
  "level": 3
}, {
  "value": "2. Cấu hình Pipeline",
  "id": "2-cấu-hình-pipeline",
  "level": 3
}, {
  "value": "3. Chạy pipeline",
  "id": "3-chạy-pipeline",
  "level": 3
}, {
  "value": "4. Exlplore",
  "id": "4-exlplore",
  "level": 3
}, {
  "value": "5. Tạo Testcase",
  "id": "5-tạo-testcase",
  "level": 3
}, {
  "value": "6. Tạo Pipeline Test",
  "id": "6-tạo-pipeline-test",
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
        id: "2-fpt-data-platform",
        children: "2. FPT Data Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn sử dụng Open Metatdata"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-tạo-service",
      children: "1. Tạo Service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập Open Metadata, menu trái chọn Settings > Services > Databases, chọn Add New Service"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(624340)/* ["default"] */ .A) + "",
        width: "1379",
        height: "361"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn Service Type ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trino"
      }), " , ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(438714)/* ["default"] */ .A) + "",
        width: "1379",
        height: "427"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập thông tin"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Service name: tên service"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Description: mô tả service"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ấn Next"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(534300)/* ["default"] */ .A) + "",
        width: "1379",
        height: "604"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Nhập thông tin Connection Details"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Username"
          }), " : tên tài khoản"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Auth Configuration Type: chọn Basic Auth"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Host and Port"
          }), " : nhập thông tin kết nối Trino"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Catalog"
          }), " (optional): nhập chính xác catalog cần lấy thông tin. Nếu bỏ trống, hệ thống thực hiện lấy tất thông tin của tất cả các Catalog có qua Trino"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DatabaseSchemas"
          }), " (optional): nhập chính xác Schema cần lấy thông tin. Nếu bỏ trống, hệ thống thực hiện lấy tất thông tin của tất cả các Schema có qua Trino"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(148064)/* ["default"] */ .A) + "",
        width: "1379",
        height: "731"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối với Trino"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(372422)/* ["default"] */ .A) + "",
        width: "858",
        height: "520"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để hoàn thành tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-cấu-hình-pipeline",
      children: "2. Cấu hình Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện cấu hình Pipeline lấy dữ liệu từ Service vào Open Metadata"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Tại màn hình danh sách Service vừa khởi tạo, chọn ấn xem chi tiết"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(26077)/* ["default"] */ .A) + "",
        width: "1379",
        height: "366"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Tại giao diện chi tiết Service, chọn tab Ingestion, ấn Add Ingestion > Add Metadata Ingestion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(559604)/* ["default"] */ .A) + "",
        width: "1379",
        height: "414"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Tại giao diện Add Metadata Ingestion"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên pipeline"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Database Filter Pattern"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Includes"
              }), " : nhập thông tin database sẽ lấy dữ liệu"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Exclude"
              }), " (optional): nhập thông tin database sẽ loại trừ lấy dữ liệu"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Schema Filter Pattern"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Includes"
              }), " : nhập thông tin schema sẽ lấy dữ liệu"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Exclude"
              }), " (optional): nhập thông tin schema sẽ loại trừ lấy dữ liệu"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Table Filter Pattern"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Includes"
              }), " : nhập thông tin table sẽ lấy dữ liệu"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Exclude"
              }), " (optional): nhập thông tin table sẽ loại trừ lấy dữ liệu"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule"
          }), " để thiết lập lịch tần suất Ingest dữ liệu"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "On demand"
          }), " để chạy ingestion thủ công"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of retries"
          }), " : số lần thử lại nếu ingest lỗi"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add & Deploy"
      }), ", để hoàn thành thêm Ingestion và triển khai Job Ingestion"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-chạy-pipeline",
      children: "3. Chạy pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Tại màn hình danh sách Service vừa khởi tạo, chọn ấn xem chi tiết"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(535491)/* ["default"] */ .A) + "",
        width: "1379",
        height: "366"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bước 2: Tại giao diện chi tiết ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service"
      }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ingestion"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bước 3: Tại pipeline vừa khởi tạo, ấn Action ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(852037)/* ["default"] */ .A) + "",
        width: "1379",
        height: "452"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run"
      }), " , Job Ingestion được thực thi để lấy dữ liệu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata"
      }), " về hệ thống"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu Job Ingestion được lập lịch, các Pipeline sẽ được tự động thực thi theo thời gian đã thiết lập"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-exlplore",
      children: "4. Exlplore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi chạy các Ingestion, Explore dữ liệu tại Menu Explore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(286354)/* ["default"] */ .A) + "",
        width: "1379",
        height: "764"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(739272)/* ["default"] */ .A) + "",
        width: "1379",
        height: "763"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-tạo-testcase",
      children: "5. Tạo Testcase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra chất lượng dữ liệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Từ giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Explore"
      }), " , chọn bảng cần tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testcase"
      }), " , ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Test"
      }), " (Table để kiểm tra trên bảng, Column để kiểm tra trên cột)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(182296)/* ["default"] */ .A) + "",
        width: "1379",
        height: "655"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tạo Add Column Test"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(523540)/* ["default"] */ .A) + "",
        width: "1379",
        height: "763"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submit"
      }), " để tạo Test"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-tạo-pipeline-test",
      children: "6. Tạo Pipeline Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Từ giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Explore"
      }), " , tại bảng có Test case vừa tạo, chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline"
      }), " , ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(694818)/* ["default"] */ .A) + "",
        width: "1379",
        height: "643"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập thông tin Scheduler for Test Cases"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Name: Tên lịch chạy test"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Schedule để lập lịch chạy định kỳ"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn On Demand để chạy thủ công"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn các testcase sẽ chạy trong pipeline"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submit"
      }), " để hoàn thành tạo lịch cho testcase"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi pipeline test được chạy, hệ thống sẽ tiến hành kiểm tra dữ liệu theo testcase đã cấu hình và trả về kết quả theo bảng và theo tổng quan cả hệ thống"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(265042)/* ["default"] */ .A) + "",
        width: "1379",
        height: "661"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(225023)/* ["default"] */ .A) + "",
        width: "1379",
        height: "501"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-open-metadata",
        children: " Previous Xóa Open Metadata "
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

/***/ 182296
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/192d6619e34b-image5b-1268cb498668d6c5d97e1f5b9dad990d.png");

/***/ },

/***/ 739272
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5861955c363c-image5a-ddc9ad7b018f644b031ec1520461660e.png");

/***/ },

/***/ 286354
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5e58b26aedc9-image59-a71f7cb79a5bef168ef07149cac796cd.png");

/***/ },

/***/ 534300
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/61c2ad205d9b-image35-1-8e58b7e94f760d00c4a00b67634a7946.png");

/***/ },

/***/ 523540
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6c9a8bb96496-image5c-49035bf2ba1741159794af88a9c0b1a6.png");

/***/ },

/***/ 624340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/789bf1675a83-image33-aa544a01b570c33b191116f58f670b2f.png");

/***/ },

/***/ 148064
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8117499e666b-image36-33f50ada1a17444eb4501ee05be6d15e.png");

/***/ },

/***/ 372422
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ba7e72f2f164-image37-6ace38d8e6c8f74ded803a33d3d81c50.png");

/***/ },

/***/ 26077
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1984557d12b-image3b-0b617d153a5d0a12cf48db5d6f3199cc.png");

/***/ },

/***/ 852037
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ddb4f7da13d0-image3c-e00817f57f810194d90564691dde6905.png");

/***/ },

/***/ 694818
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e1621d2a7461-image5d-65c8611172eb7c8bf8a7b2ea76eb00e2.png");

/***/ },

/***/ 535491
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e3761db44fc2-image3b-1-0b617d153a5d0a12cf48db5d6f3199cc.png");

/***/ },

/***/ 438714
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ed1d1dd2d586-image34-5acc2641435588a351f4761f4ddcfa47.png");

/***/ },

/***/ 225023
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f10436fef09a-image5f-13a6d5e6d03c76e24d7e1e8008919c94.png");

/***/ },

/***/ 559604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f19a13a3200b-image39-c8814e55618e0a81de674c7c68ab3c16.png");

/***/ },

/***/ 265042
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fd0ed7c0a5f0-image5e-783703e654fca0dc907baad832f1e2b2.png");

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