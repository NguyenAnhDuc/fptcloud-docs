"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[70005],{

/***/ 92916
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_notification_md_055_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-notification-md-055.json
const site_docs_managed_fpt_database_engines_new_notification_md_055_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/notification","title":"2. Managed – FPT Database Engines","description":"Notification","source":"@site/docs/managed-fpt-database-engines-new/notification.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/notification","permalink":"/managed-fpt-database-engines-new/notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Notification","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=notification","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Network connectivity","permalink":"/managed-fpt-database-engines-new/network-connectivity"},"next":{"title":"On off pitr","permalink":"/managed-fpt-database-engines-new/on-off-pitr"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/notification.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Notification',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=notification',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Cấu hình nhận thông báo từ FPT Database Engine",
  "id": "1-cấu-hình-nhận-thông-báo-từ-fpt-database-engine",
  "level": 2
}, {
  "value": "Bước 1: Truy cập trang thiết lập notification",
  "id": "bước-1-truy-cập-trang-thiết-lập-notification",
  "level": 3
}, {
  "value": "Bước 2: Thiết lập danh sách nhận thông báo cho dịch vụ",
  "id": "bước-2-thiết-lập-danh-sách-nhận-thông-báo-cho-dịch-vụ",
  "level": 3
}, {
  "value": "2. Cấu hình Telegram để nhận thông báo từ FPT Database Engine",
  "id": "2-cấu-hình-telegram-để-nhận-thông-báo-từ-fpt-database-engine",
  "level": 2
}, {
  "value": "Bước 1: Tạo channel trên Telegram",
  "id": "bước-1-tạo-channel-trên-telegram",
  "level": 3
}, {
  "value": "Bước 2: Thêm member @fde_notify_bot vào channel vừa tạo",
  "id": "bước-2-thêm-member-fde_notify_bot-vào-channel-vừa-tạo",
  "level": 3
}, {
  "value": "Bước 3: Chọn bot @fde_notify_bot làm admin của channel",
  "id": "bước-3-chọn-bot-fde_notify_bot-làm-admin-của-channel",
  "level": 3
}, {
  "value": "Bước 4: Lấy ID của channel vừa tạo",
  "id": "bước-4-lấy-id-của-channel-vừa-tạo",
  "level": 3
}, {
  "value": "Bước 5: Khai báo ID của channel FDE Notify vừa tạo vào kênh nhận thông báo trên FPT Console Portal",
  "id": "bước-5-khai-báo-id-của-channel-fde-notify-vừa-tạo-vào-kênh-nhận-thông-báo-trên-fpt-console-portal",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
      children: "Notification"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification"
      }), " giúp người dùng cấu hình nhận các thông báo về các sự kiện và trạng thái dịch vụ quan trọng liên quan đến các cụm cơ sở dữ liệu của mình. Các thông báo này có thể được gửi qua email hoặc kênh bên ngoài như Telegram, giúp bạn kịp thời nắm bắt các tình huống như lịch sao lưu, ngưỡng tài nguyên, mở rộng tài nguyên và các sự kiện quan trọng khác."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống hiện hỗ trợ các loại thông báo sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông báo Sao lưu & Khôi phục – bao gồm bật/tắt dịch vụ backup, kết quả thành công/thất bại của job backup và restore."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông báo Tài nguyên – cảnh báo khi vCPU, RAM hoặc Disk đạt ngưỡng được định trước."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông báo Mở rộng tài nguyên (Vertical Scaling) – thông báo về các sự kiện tự động tăng CPU/RAM/Disk."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông báo bảo trì – thông báo khi FPT có hoạt động bảo trì tác động lên dabatabase cluster."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn này giúp bạn thiết lập và quản lý Notification để theo dõi các sự kiện quan trọng trong FPT Database Engine một cách hiệu quả trên FPT Cloud Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-cấu-hình-nhận-thông-báo-từ-fpt-database-engine",
      children: "1. Cấu hình nhận thông báo từ FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-trang-thiết-lập-notification",
      children: "Bước 1: Truy cập trang thiết lập notification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " ” → “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Database"
      }), " ”. Trên trang Database list, chọn Cluster ID của cụm bạn muốn cấu hình thông báo > Chọn tab “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification"
      }), " ” để mở màn hình quản lý cấu hình notification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(293475)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1422"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-thiết-lập-danh-sách-nhận-thông-báo-cho-dịch-vụ",
      children: "Bước 2: Thiết lập danh sách nhận thông báo cho dịch vụ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add New Alert List"
      }), " (biểu tượng dấu cộng cạnh ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification List"
      }), ") để mở hộp thoại thêm cấu hình nhận thông báo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(595687)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1424"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type"
        }), " : Chọn hình thức gửi thông báo khi cảnh báo được kích hoạt. Có 2 truỳ chọn:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Email"
            }), " : Gửi cảnh báo qua email."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Telegram"
            }), " : Gửi cảnh báo qua telegram. Hình thức này không hỗ trợ cho dịch vụ “Maintenance”."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current Services Notification"
        }), " : Chọn dịch vụ sẽ kích hoạt thông báo khi tác vụ hoặc sự kiện tương ứng được thực hiện. Có các lựa chọn:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Backup"
            }), " – Thông báo khi chạy backup."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Restore"
            }), " – Thông báo khi thực hiện restore."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintenance"
            }), " – Thông báo khi hệ thống thực hiện bảo trì dịch vụ."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource"
            }), " – Cảnh báo sử dụng tài nguyên."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Vertical Scaling"
            }), " – Thông báo khi thay đổi tài nguyên (scale)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current Recipient List"
        }), " : Danh sách nhận cảnh báo:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Nếu chọn Type = “Email” -> nhập địa chỉ email sẽ nhận cảnh báo."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu chọn Type = “Telegram” -> nhập ID của channel telegram sẽ nhận cảnh báo. Hướng dẫn lấy ID của channel xem tại mục ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=notification#contentify_3",
              children: "2. Cấu hình Telegram để nhận thông báo từ FPT Database Engine"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Điều kiện cảnh báo cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Current Services Notification"
        }), " = “Resource”:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "vCPU more than (%)"
            }), " : Nhập ngưỡng sử dụng CPU (theo %). Cảnh báo được kích hoạt khi mức sử dụng vCPU vượt quá giá trị này."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RAM more than (%)"
            }), " : Nhập ngưỡng sử dụng bộ nhớ (theo %). Cảnh báo được kích hoạt khi RAM vượt quá mức đã cấu hình."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage more than (%)"
            }), " : Nhập ngưỡng sử dụng dung lượng lưu trữ (theo %). Cảnh báo được kích hoạt khi dung lượng sử dụng vượt mức cho phép.\nCảnh báo sẽ được gửi khi ít nhất một điều kiện được thoả mãn. Nếu cả ba điều kiện đều đạt, hệ thống sẽ gửi nhiều thông báo tương ứng."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin nhấn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " ” để lưu lại cấu hình."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tất cả các cảnh báo đã cấu hình sẽ xuất hiện trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification List"
      }), " trên tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification"
      }), ". Bạn có thể xem chi tiết người nhận, loại cảnh báo, dịch vụ giám sát và trạng thái (bật/tắt). Có thể thực hiện các thao tác quản lý sau trên một cảnh báo đã cấu hình:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chỉnh sửa cảnh báo – nhấn biểu tượng bút chì bên cạnh alert list để cập nhật người nhận hoặc dịch vụ giám sát."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tắt cảnh báo – vô hiệu hóa tạm thời cảnh báo mà không xóa quy tắc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bật lại cảnh báo – kích hoạt lại cảnh báo đã tắt trước đó."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cấu hình cảnh báo trước khi bật dịch vụ backup và vertical scaling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thiết lập ngưỡng hợp lý để tránh spam cảnh báo."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gán thông báo cho đội vận hành và DBA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết hợp alert với monitoring dashboard để giám sát toàn diện."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-cấu-hình-telegram-để-nhận-thông-báo-từ-fpt-database-engine",
      children: "2. Cấu hình Telegram để nhận thông báo từ FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi nhận thông báo từ FPT qua Telegram, cần thực hiện nhập ID của channel. Các bước dưới đây hướng dẫn các thao tác cần thực hiện để lấy được ID này."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-tạo-channel-trên-telegram",
      children: "Bước 1: Tạo channel trên Telegram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đăng nhập Telegram, tạo một channel mới dạng Private (ví dụ: FDE Notify) để nhận thông báo từ FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-thêm-member-fde_notify_bot-vào-channel-vừa-tạo",
      children: "Bước 2: Thêm member @fde_notify_bot vào channel vừa tạo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "@fde_notify_bot"
      }), " vào ô tìm kiếm member cần thêm vào channel và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FDE NOTIFY"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(677250)/* ["default"] */ .A) + "",
        width: "2560",
        height: "461"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-chọn-bot-fde_notify_bot-làm-admin-của-channel",
      children: "Bước 3: Chọn bot @fde_notify_bot làm admin của channel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đặt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "@fde_notify_bot"
      }), " làm Quản trị viên của kênh vừa tạo để cho phép nó gửi thông báo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(374708)/* ["default"] */ .A) + "",
        width: "586",
        height: "744"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-4-lấy-id-của-channel-vừa-tạo",
      children: "Bước 4: Lấy ID của channel vừa tạo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên ô Search nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "@username_to_id_bot"
      }), " để tìm mã chat IDBot:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(216954)/* ["default"] */ .A) + "",
        width: "2560",
        height: "688"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IDBot"
      }), " để mở cửa sổ chat. Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start"
      }), " để bắt đầu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn vào nút mở bảng phím tắt (Keyboard Shortcuts button) và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Channel"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(163987)/* ["default"] */ .A) + "",
        width: "2116",
        height: "1702"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn tên channel vừa mới tạo > bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Send"
      }), " để gửi yêu cầu lấy thông tin ID. Telegram sẽ trả về ID của channel. Lưu lại ID này để sử dụng sau này."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855085)/* ["default"] */ .A) + "",
        width: "2211",
        height: "1697"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-5-khai-báo-id-của-channel-fde-notify-vừa-tạo-vào-kênh-nhận-thông-báo-trên-fpt-console-portal",
      children: "Bước 5: Khai báo ID của channel FDE Notify vừa tạo vào kênh nhận thông báo trên FPT Console Portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện các thao tác như hướng dẫn ở mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=notification#contentify_0",
        children: "1. Cấu hình nhận thông báo trên FPT Console Portal"
      }), ". Khi chọn loại thông báo là Telegram, tại bước nhập channel thực hiện copy ID lấy được từ Bước 4 để khai báo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : nếu muốn thêm nhiều channel thì thực hiện tạo nhiều channel trên Telegram như hướng dẫn từ Bước 1 đến Bước 4 để lấy thông tin khai báo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./maintenance-window",
        children: " Previous Maintenance Window "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./monitoring",
        children: " Next Monitoring "
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

/***/ 855085
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/431370d0ebfb-tele_channel_id-0af04289957c56c73402dc8f3e9225d6.png");

/***/ },

/***/ 595687
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5779954f8769-add-alert-scaled-b2dafabc09a4ddc063b9d7bac4e0eed2.png");

/***/ },

/***/ 677250
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8f932da5f6b6-tele_add_noti_bot-scaled-d77b69df08da41598641c269c71f7d5a.png");

/***/ },

/***/ 374708
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab9912a841c9-tele_admin-161a8a0807d1c2785b5e023cb6469192.png");

/***/ },

/***/ 163987
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ad989119232e-tele_channel_select-86c2bf589805a580fe3e3f35893bcdab.png");

/***/ },

/***/ 216954
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fab904cbcb55-Tele_IDBot-scaled-d655f51c239a2d28e3a739164f31a03c.png");

/***/ },

/***/ 293475
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fbca99ff5a8a-notification-scaled-4749893ecdb025b314e44b0c9a75d909.png");

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