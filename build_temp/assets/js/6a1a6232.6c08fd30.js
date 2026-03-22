"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[25021],{

/***/ 595
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_monitoring_report_export_md_6a1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-monitoring-report-export-md-6a1.json
const site_docs_managed_fpt_database_engines_new_monitoring_report_export_md_6a1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/monitoring/report-export","title":"2. Managed – FPT Database Engines","description":"Xuất báo cáo thủ công (Report Export)","source":"@site/docs/managed-fpt-database-engines-new/monitoring/report-export.md","sourceDirName":"managed-fpt-database-engines-new/monitoring","slug":"/managed-fpt-database-engines-new/monitoring/report-export","permalink":"/managed-fpt-database-engines-new/monitoring/report-export","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Report export","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=report-export","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Notification","permalink":"/managed-fpt-database-engines-new/monitoring/notification"},"next":{"title":"Report schedule","permalink":"/managed-fpt-database-engines-new/monitoring/report-schedule"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/monitoring/report-export.md


const frontMatter = {
	sidebar_label: 'Report export',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=report-export',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Bước 1: Truy cập chức năng",
  "id": "bước-1-truy-cập-chức-năng",
  "level": 3
}, {
  "value": "Bước 2: Nhập điều kiện filter",
  "id": "bước-2-nhập-điều-kiện-filter",
  "level": 3
}, {
  "value": "Bước 3: Xem trước dữ liệu báo cáo",
  "id": "bước-3-xem-trước-dữ-liệu-báo-cáo",
  "level": 3
}, {
  "value": "Bước 4: Export báo cáo",
  "id": "bước-4-export-báo-cáo",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
      children: "Xuất báo cáo thủ công (Report Export)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xuất báo cáo thủ công (Report Export)"
      }), " cho phép người dùng trích xuất dữ liệu thống kê về các hoạt động backup (sao lưu) dữ liệu của cụm cơ sở dữ liệu theo khoảng thời gian tùy chọn ngay tại thời điểm thực hiện chức năng. Báo cáo giúp người dùng theo dõi lịch sử backup, đánh giá trạng thái thực hiện, phục vụ kiểm tra vận hành hoặc lưu trữ nội bộ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện xuất file báo cáo backup, người dùng thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-chức-năng",
      children: "Bước 1: Truy cập chức năng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " trên thanh menu và chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Features"
      }), " -> Click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Go to Reporting"
      }), " để mở màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reporting"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(875025)/* ["default"] */ .A) + "",
        width: "3067",
        height: "1636"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Features"
      }), " , tiếp tục click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Go to Reporting"
      }), " để mở màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reporting"
      }), ". Khi giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reporting"
      }), " hiển thị, chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Export"
      }), " để truy cập tính năng xuất báo cáo thủ công."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-nhập-điều-kiện-filter",
      children: "Bước 2: Nhập điều kiện filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reporting"
      }), " , người dùng nhập các điều kiện để xuất dữ liệu báo cáo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390035)/* ["default"] */ .A) + "",
        width: "3071",
        height: "1547"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các thông tin cần nhập bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Type"
        }), " : chọn loại báo cáo cần export trong danh sách có sẵn. Hiện tại mới chỉ cung cấp báo cáo cho dịch vụ backup nên danh sách lựa chọn chỉ có 1 giá trị là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Report"
        }), " và mặc định chọn giá trị này. Khi cung cấp các loại báo cáo khác sẽ bổ sung thêm giá trị."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Period"
        }), " : chọn khoảng thời gian để lọc dữ liệu xuất báo cáo. Danh sách bao gồm:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Yesterday"
            }), " : lấy dữ liệu từ 00:00:00 của ngày hôm qua đến thời điểm hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu sẽ bao gồm khoảng thời gian từ 00:00:00 ngày 16/04/2025 đến 11:00:00 ngày 17/04/2025."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Last 7 days"
            }), " : lấy dữ liệu trong 7 ngày liền kề trước thời điểm hiện tại, tính từ 00:00:00 của ngày (hiện tại - 7) đến ngày hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu được lấy từ 00:00:00 ngày 10/04/2025 đến 11:00:00 ngày 17/04/2025."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Last 30 days"
            }), " : lấy dữ liệu trong 30 ngày liền kề trước thời điểm hiện tại, tính từ 00:00:00 của ngày (hiện tại - 30) đến ngày hiện tại. VD: Nếu xuất báo cáo lúc 11:00:00 ngày 17/04/2025, dữ liệu được lấy từ 00:00:00 ngày 18/03/2025 đến 11:00:00 ngày 17/04/2025."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Range"
            }), " : lấy dữ liệu theo khoảng thời gian người dùng xác định, tính từ 00:00:00 của ngày bắt đầu đến 23:59:59 đến ngày kết thúc. VD: Nếu xuất báo cáo từ ngày 15/04/2025 đến ngày 17/04/2025, dữ liệu được lấy từ 00:00:00 ngày 15/04/2025 đến 23:59:59 ngày 17/04/2025. Trường hợp người dùng lựa chọn Custom Range, hiển thị thêm trường Date Range như sau:"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(829278)/* ["default"] */ .A) + "",
        width: "3071",
        height: "1636"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Date Range"
      }), " : chọn khoảng thời gian xuất báo cáo. Chỉ được xuất dữ liệu trong khoảng thời gian tối đa 90 ngày so với ngày hiện tại và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "To Date"
      }), " không được sau ngày hiện tại. Một số lưu ý khi khách hàng nhập khoảng thời gian xuất báo cáo như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* Giá trị mặc định: ngày hiện tại.\n\n* Chỉ cho phép chọn From Date và To Date thoả mãn (Current Date - 90) ≤ From Date ≤ To Date \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database Cluster"
          }), " : chọn các database cần lấy dữ liệu để xuất ra báo cáo, có thể lựa chọn nhiều database cùng lúc. Danh sách lựa chọn bao gồm:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Select All"
            }), " : chọn tất cả database trong danh sách."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Các database thuộc VPC người dùng đã chọn."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nếu không nhập giá trị đầy đủ và hợp lệ cho các trường input, button ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Preview"
        }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Export"
        }), " sẽ bị disabled."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mỗi khi thay đổi điều kiện filter thì ẩn không hiển thị ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Preview"
        }), ". Khách hàng muốn xem dữ liệu trước khi export thì phải click button ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Preview"
        }), " sau mỗi lần thay đổi filter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-xem-trước-dữ-liệu-báo-cáo",
      children: "Bước 3: Xem trước dữ liệu báo cáo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi đã nhập tất cả các trường thông tin đầu vào đầy đủ và hợp lệ, click button Preview để xem trước bản báo cáo backup database ngay trên màn hình. Màn hình hiển thị thông tin các lần thực hiện backup database trong khoảng thời gian đã chọn. Nếu không có database nào chạy job backup trong khoảng thời gian đã chọn sẽ hiển thị \"Nothing Found\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854476)/* ["default"] */ .A) + "",
        width: "3037",
        height: "1642"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mô tả các trường thông tin hiển thị trong bảng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Preview"
      }), " :"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên cột"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Job Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị tên của job backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị tên tenant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị tên của VPC chứa database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster Id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị cluster id của database chạy job backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị cluster name của database chạy job backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị loại engine của database chạy job backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị version của database chạy job backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị trạng thái của database tại thời điểm lấy dữ liệu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị loại job backup (\"full\" - nếu backup toàn bộ data của database và \"diff\" - nếu chỉ backup phần thay đổi so với bản backup gần nhất)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị giá trị retention của file backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị loại retention (\"day\" - nếu retention tính theo số ngày tối đa file backup được lưu trữ và \"quantity\" - nếu retention tính theo số lượng file backup tối đa được lưu trữ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup Usage (GB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị dung lượng ổ backup đã sử dụng theo đơn vị GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup File Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị tên file backup được tạo ra sau khi chạy job"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị trạng thái chạy job backup (\"successfull\" - chạy job backup thành công và \"deleted\" - job chạy thành công và đã bị xoá)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị thời gian bắt đầu backup dữ liệu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finish Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiển thị thời gian thời gian hoàn thành backup dữ liệu"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-4-export-báo-cáo",
      children: "Bước 4: Export báo cáo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi đã nhập tất cả trường thông tin đầy đủ và hợp lệ, người dùng click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Export"
      }), " để xuất báo cáo dưới dạng file csv và tự động download file về máy local của người dùng. File báo cáo backup database được tải xuống sẽ bao gồm các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tên file report: theo định dạng {reportType}{vpcName}{exportTime}, trong đó:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["{reportType}: loại báo cáo người dùng cần xuất (giá trị người dùng chọn trong trường ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Report Type"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "{vpcName}: VPC người dùng đã chọn khi xuất báo cáo (giá trị VPC người dùng chọn trên thanh menu)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "{exportTime}: thời gian xuất báo cáo theo định dạng ddMMyyyyHHmmss"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Định dạng file: csv"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Các cột: bao gồm các thông tin được hiển thị trên bảng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Preview"
        }), " của màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Export"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./reporting",
        children: " Previous Reporting "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./report-schedule",
        children: " Next Lập lịch báo cáo tự động (Report Schedule) "
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

/***/ 854476
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/154d2719b2a9-B4.1-5b7c08094016d93da4276f08a738257f.png");

/***/ },

/***/ 875025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c0322d1a13a7-B1-a85c368f565cfffcf4c459a4f8a020d8.png");

/***/ },

/***/ 829278
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d285fd2c575f-B3-0d4f08135a553943cc54773eb635c24f.png");

/***/ },

/***/ 390035
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee06829e5b35-B2-893d9f11cf9090025ec80407d6f2c296.png");

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