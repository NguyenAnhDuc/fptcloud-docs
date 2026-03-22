"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[28055],{

/***/ 587529
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_report_schedule_md_81d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-report-schedule-md-81d.json
const site_docs_managed_fpt_database_engines_new_report_schedule_md_81d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/report-schedule","title":"2. Managed – FPT Database Engines","description":"Lập lịch báo cáo tự động (Report Schedule)","source":"@site/docs/managed-fpt-database-engines-new/report-schedule.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/report-schedule","permalink":"/managed-fpt-database-engines-new/report-schedule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Report schedule","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=report-schedule","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Report export","permalink":"/managed-fpt-database-engines-new/report-export"},"next":{"title":"Reporting","permalink":"/managed-fpt-database-engines-new/reporting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/report-schedule.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Report schedule',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=report-schedule',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Bước 1: Truy cập trang quản lý lịch trình",
  "id": "bước-1-truy-cập-trang-quản-lý-lịch-trình",
  "level": 3
}, {
  "value": "Bước 2: Tạo một lịch trình báo cáo mới",
  "id": "bước-2-tạo-một-lịch-trình-báo-cáo-mới",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
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
      children: "Lập lịch báo cáo tự động (Report Schedule)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lập lịch báo cáo tự động (Report Schedules)"
      }), " cho phép người dùng tạo, quản lý và theo dõi lịch trình tự động gửi báo cáo về các hoạt động backup (sao lưu dữ liệu) của cụm cơ sở dữ liệu theo khoảng thời gian tùy chọn. Thay vì phải truy cập hệ thống để xuất báo cáo thủ công, người dùng có thể thiết lập lịch trình để hệ thống tự động gửi báo cáo định kỳ tới các địa chỉ email đã định trước. Báo cáo được gửi dưới dạng tệp CSV."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo một lịch trình gửi báo cáo thực hiện các bước dưới đây:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-trang-quản-lý-lịch-trình",
      children: "Bước 1: Truy cập trang quản lý lịch trình"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " trên thanh menu rồi chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Features"
      }), " để mở màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Features"
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
        children: "Report Schedules"
      }), " để xem danh sách các lịch trình báo cáo hiện có. Trong trường hợp chưa tạo lịch trình nào danh sách sẽ hiển thị ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Nothing Found"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185046)/* ["default"] */ .A) + "",
        width: "2560",
        height: "931"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin của từng lịch trình bao gồm:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Schedule name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên của lịch trình"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Report type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loại báo cáo (ví dụ: Backup Report)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data period"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Khoảng thời gian dữ liệu được lấy cho mỗi báo cáo (ví dụ: Yesterday, Last 7 Days, Last 30 Days, Last Month)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Report frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tần suất gửi báo cáo (ví dụ: Daily, Weekly, Monthly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email recipients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Danh sách các địa chỉ email sẽ nhận báo cáo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Created at"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thời điểm lịch trình được tạo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Các tùy chọn để chỉnh sửa (Edit) hoặc xóa (Delete) lịch trình"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-tạo-một-lịch-trình-báo-cáo-mới",
      children: "Bước 2: Tạo một lịch trình báo cáo mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Schedules"
      }), " , nhấn vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Schedule"
      }), " ở góc trên cùng bên phải để mở màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add a Report Schedule"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470830)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1424"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin cấu hình cho lịch trình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule Name"
          }), " : Nhập tên cho lịch trình. Tên này nên mô tả rõ ràng mục đích của lịch trình, có độ dài tối đa 25 ký tự, tối thiểu 6 ký tự và chỉ được bao gồm các chữ cái trong bảng chữ cái tiếng Anh, chữ số, dấu cách, dấu gạch dưới (_) và dấu gạch ngang (-). Ví dụ: ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Report_for_group1, Report for group 2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Report Type"
          }), " : Chọn loại báo cáo cần sử dụng trong danh sách có sẵn. Hiện tại mới chỉ cung cấp báo cáo cho dịch vụ backup nên danh sách lựa chọn chỉ có 1 giá trị là ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Backup Report"
          }), " và mặc định chọn giá trị này. Khi cung cấp các loại báo cáo khác sẽ bổ sung thêm giá trị."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Period"
          }), " : Chọn khoảng thời gian dữ liệu sẽ được lấy cho mỗi lần tạo báo cáo. Khi thay đổi giá trị của ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Period"
          }), " sẽ tự động thay đổi giá trị của trường ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Report Frequency"
          }), " và trường ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Day To Send"
          }), " theo từng trường hợp (xem mô tả tại từng trường). Danh sách lựa chọn bao gồm:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
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
              children: "Last month"
            }), " : lấy dữ liệu của tháng trước đó (lấy full tháng, từ ngày 1 đến ngày cuối tháng). VD: ngày thực hiện export là ngày 17/04/2025 thì dữ liệu xuất ra báo cáo là dữ liệu từ ngày 01/03/2025 đến ngày 31/03/2025."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Report Frequency"
          }), " : Tần suất chạy lịch trình. Giá trị bao gồm ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Daily"
          }), " , ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Weekly"
          }), " và ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Monthly"
          }), ". Giá trị trường này thay đổi theo khoảng thời gian lấy dữ liệu (chọn trong trường ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Period"
          }), "):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Period"
            }), " chọn \"Yesterday\" thì ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Report Frequency"
            }), " hiển thị \"Daily\" (gửi báo cáo hàng ngày)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Period"
            }), " chọn \"Last 7 days\" thì ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Report Frequency"
            }), " hiển thị \"Weekly\" (gửi báo cáo hàng tuần)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Period"
            }), " chọn \"Last 30 days\" và \"Last Month\" thì ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Report Frequency"
            }), " hiển thị \"Monthly\" (gửi báo cáo hàng tháng)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day To Send"
          }), " : Chọn ngày chạy lịch trình. Giá trị thay đổi theo khoảng thời gian lấy dữ liệu (chọn trong trường ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Period"
          }), "):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Period"
            }), " chọn \"Yesterday\" thì Day To Send hiển thị giá trị \"Daily\" (lịch trình chạy hàng ngày) và không được phép thay đổi."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Period"
            }), " chọn \"Last 7 days\" thì danh sách lựa chọn bao gồm các thứ trong tuần: \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\" và \"Sunday\" (lịch trình sẽ chạy vào ngày được chọn trong tuần)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Period"
            }), " chọn \"Last 30 days\" hoặc \"Last Month\" thì danh sách lựa chọn bao gồm các ngày trong tháng, từ 1 → 31 (lịch trình sẽ chạy vào ngày được chọn trong tháng). Nếu tháng nào đó không có ngày được chọn (ví dụ: chọn giá trị Day to Send là \"31\" nhưng tháng 2 chỉ có 28 ngày) thì lịch trình sẽ chạy vào ngày cuối cùng của tháng."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Time To Send"
          }), " : Chọn thời điểm chạy lịch trình trong ngày."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database Cluster"
          }), " : Chọn các database cần lấy dữ liệu để xuất ra báo cáo, có thể lựa chọn nhiều database cùng lúc. Danh sách lựa chọn bao gồm:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Select All"
            }), " : chọn tất cả database trong danh sách."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Các database thuộc VPC người dùng đã chọn."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Email Recipients"
          }), " : Nhập danh sách các địa chỉ email sẽ nhận báo cáo, đảm bảo nhập email chính xác để tránh thất lạc thông tin. Sử dụng button có dấu (+) để thêm và button có dấu (–) để bớt email khỏi danh sách."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mỗi email phải tuân thủ định dạng chuẩn của email, bao gồm đầy đủ 3 phần theo thứ tự là: tên người dùng, dấu \"@\" và tên miền."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Các email trong danh sách nhập không được trùng nhau."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi điền đầy đủ thông tin, nhấn button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để tạo lịch trình, hệ thống sẽ quay về màn hình danh sách với lịch trình vừa tạo được hiển thị trên đầu danh sách."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đến thời điểm chạy đã cấu hình, lịch trình vừa tạo sẽ chạy, lấy dữ liệu theo đúng khoảng thời gian và các cụm cơ sở dữ liệu đã chỉ định và xuất ra file CSV để gửi về danh sách email đã đăng ký."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi cần thiết, bạn có thể thực hiện các thao tác sau với lịch trình đã tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Xem thông tin chi tiết của lịch trình"
        }), " : Tại màn hình", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Schedules"
        }), " , nhấn vào tên của một lịch trình để xem thông tin cấu hình của lịch trình và nhật ký tác động lên lịch trình đó."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Chỉnh sửa lịch trình"
        }), " : Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Schedules"
        }), " , chọn action ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Edit"
        }), " trong cột action tương ứng với lịch trình cần sửa để vào màn hình chỉnh sửa thông tin. Người dùng có thể cập nhật các thông tin tương tự như khi tạo mới. Sau khi điền đầy đủ thông tin, nhấn button ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Edit"
        }), " để lưu các thay đổi, hệ thống sẽ quay về màn hình danh sách với các thông tin đã được cập nhật cho lịch trình vừa sửa."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Xóa lịch trình"
        }), " : Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Schedules"
        }), " , chọn action ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " để thực hiện xoá lịch trình, hệ thống sẽ hiển thị một hộp thoại xác nhận. Nhập thông tin xác nhận xoá và nhấn button ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Confirm"
        }), " để xóa vĩnh viễn lịch trình. Sau khi xoá thành công, hệ thống sẽ ngừng gửi báo cáo tới các email đã cấu hình."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./report-export",
        children: " Previous Xuất báo cáo thủ công (Report Export) "
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

/***/ 470830
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/523d245a7274-create-report-schedule-scaled-38945d8f3a7569457136214006b12816.png");

/***/ },

/***/ 185046
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a3a5aae6918c-report-schedule-list-scaled-8db1b896131f2f121923600f81665631.png");

/***/ },

/***/ 875025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c0322d1a13a7-B1-a85c368f565cfffcf4c459a4f8a020d8.png");

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