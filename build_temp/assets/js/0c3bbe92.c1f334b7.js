"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26161],{

/***/ 485728
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_api_management_quan_ly_consumers_md_0c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-api-management-quan-ly-consumers-md-0c3.json
const site_docs_fpt_api_management_quan_ly_consumers_md_0c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-api-management/quan-ly-consumers","title":"2. FPT API Management","description":"Quản lý Consumers","source":"@site/docs/fpt-api-management/quan-ly-consumers.md","sourceDirName":"fpt-api-management","slug":"/fpt-api-management/quan-ly-consumers","permalink":"/fpt-api-management/quan-ly-consumers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly consumers","title":"2. FPT API Management","source":"https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-consumers","parent":"https://fptcloud.com/documents/fpt-api-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly api site","permalink":"/fpt-api-management/quan-ly-api-site"},"next":{"title":"Quan ly products","permalink":"/fpt-api-management/quan-ly-products"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-api-management/quan-ly-consumers.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly consumers',
	title: '2. FPT API Management',
	source: 'https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-consumers',
	parent: 'https://fptcloud.com/documents/fpt-api-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT API Management';

const assets = {

};



const toc = [{
  "value": "1. Tạo Consumers mới",
  "id": "1-tạo-consumers-mới",
  "level": 2
}, {
  "value": "2. Subscribe product",
  "id": "2-subscribe-product",
  "level": 2
}, {
  "value": "3. Unsubscribe product",
  "id": "3-unsubscribe-product",
  "level": 2
}, {
  "value": "4. Thay đổi thông tin Consumer",
  "id": "4-thay-đổi-thông-tin-consumer",
  "level": 2
}, {
  "value": "5. Lấy thông tin xác thực của Consumer",
  "id": "5-lấy-thông-tin-xác-thực-của-consumer",
  "level": 2
}, {
  "value": "6. Xóa Consumer",
  "id": "6-xóa-consumer",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "2-fpt-api-management",
        children: "2. FPT API Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Consumers"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi nhà cung cấp public product lên site, phía client chưa thể sử dụng được các API đó, muốn sử dụng được, nhà cung cấp phải vào menu Consumer để tạo thông tin của client và chỉ định client đó subscribe một product đã được public trước đó. Khi đó thì client mới sử dụng được API."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tạo-consumers-mới",
      children: "1. Tạo Consumers mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Manger"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumers"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creat."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 26",
        src: (__webpack_require__(305678)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin theo yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Tên Consumers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Site:"
        }), " Chọn site."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API Key:"
        }), " Tích chọn xác thực bằng api key hay không."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Title:"
        }), " Tiêu đề."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password:"
        }), " Mật khẩu nếu dùng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic Authenticate"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confirm password:"
        }), " Xác nhận lại mật khẩu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max per second:"
        }), " Điền số lần client có thể gọi API trên giây."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max per minute:"
        }), " Điền số lần client có thể gọi API trên phút."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max per hour:"
        }), " Điền số lần client có thể gọi API trên giờ."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 27",
        src: (__webpack_require__(778320)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tiến hành tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 28",
        src: (__webpack_require__(802272)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-subscribe-product",
      children: "2. Subscribe product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo consumer xong, để sử dụng được các API có trong product thì nhà cung cấp phải chỉ định consumer subcribe một product."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer Management"
      }), " , chọn consumer và click chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product subscription."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 29",
        src: (__webpack_require__(116819)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subscribe product."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 30",
        src: (__webpack_require__(303565)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 31",
        src: (__webpack_require__(684222)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để lưu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 32",
        src: (__webpack_require__(50098)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi hoàn tất các bước bên trên, client đã có thể sử dụng các API mà nhà cung cấp đưa ra."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Product cần phải ở trạng thái publish thì consumer mới có thể subcribe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-unsubscribe-product",
      children: "3. Unsubscribe product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer Management"
      }), " , chọn consumer và click chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product subscription."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 29",
        src: (__webpack_require__(116819)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unsubscribe product."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 54",
        src: (__webpack_require__(996857)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để lưu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 55",
        src: (__webpack_require__(136086)/* ["default"] */ .A) + "",
        width: "456",
        height: "152"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-thay-đổi-thông-tin-consumer",
      children: "4. Thay đổi thông tin Consumer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để thay đổi thông tin của một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " , bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " cần thay đổi thông tin > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 56",
        src: (__webpack_require__(119142)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin mới và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 57",
        src: (__webpack_require__(959862)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Một số trường sẽ không thể thay đổi và sẽ bị disable trên giao diện sửa. Các trường còn lại cần nhập dữ liệu tuân thủ validation tương tự khi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-lấy-thông-tin-xác-thực-của-consumer",
      children: "5. Lấy thông tin xác thực của Consumer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để sử dụng API được tạo từ API Management, admin API cần lấy thông tin xác thực của từng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " và bàn giao lại cho end user. Hiện tại API Management hỗ trợ 2 phương thức xác thực là Basic Auth (User/Pass) và API Key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.1 Lấy thông tin Username và Password của Basic Auth:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Username:"
        }), " Tên user với cấu trúc:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Username = UsernameProvider + tên site + usernameConsumer."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Ví dụ:"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "demo123.sitedemo.demoacc"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hoặc lấy theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " cần lấy Username > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 58",
        src: (__webpack_require__(833047)/* ["default"] */ .A) + "",
        width: "1024",
        height: "590"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Lấy thông tin Username ở trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Authen User."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 59",
        src: (__webpack_require__(782564)/* ["default"] */ .A) + "",
        width: "1024",
        height: "590"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password"
        }), " : Mật khẩu của user đã khai báo ở bước tạo consumer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5.2 Lấy thông tin API Key:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " cần lấy API Key > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 60",
        src: (__webpack_require__(182500)/* ["default"] */ .A) + "",
        width: "1024",
        height: "590"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Lấy thông tin API Key ở trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Api key."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 61",
        src: (__webpack_require__(84447)/* ["default"] */ .A) + "",
        width: "1024",
        height: "590"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-xóa-consumer",
      children: "6. Xóa Consumer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " đã khai báo trước đó khỏi hệ thống, bạn cần đảm bảo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " đấy đang không subcribe bất cứ Product nào. Để ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unsubscribe Product"
      }), " , hãy thao tác theo hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unsubscribe Product."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " , bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " cần xóa > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 62",
        src: (__webpack_require__(513197)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Trong popup xác nhận thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes"
      }), " để tiến hành xóa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 55",
        src: (__webpack_require__(136086)/* ["default"] */ .A) + "",
        width: "456",
        height: "152"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Nếu gặp lỗi : ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Could not remove that consumer as there are still subscriptions of that consumer!"
      }), ". Bạn cần Unsubscribe toàn bộ Product trước khi thao tác."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-api-site",
        children: " Previous Quản lý API site "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./analytics",
        children: " Next Analytics "
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

/***/ 782564
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/134f47e52e7a-Userguide-FPT-API-Management-59-1024x590-d49b77136edd18c5fd62d7ed79b14e8a.png");

/***/ },

/***/ 182500
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/14edb59b64d4-Userguide-FPT-API-Management-60-1024x590-c54718f7b624e9cc9ce9db7628bc4881.png");

/***/ },

/***/ 136086
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 802272
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29ff8f20b26c-Userguide-FPT-API-Management-28-1024x538-2c95ce0a348c52a8cd3890a341c8e291.png");

/***/ },

/***/ 305678
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/38542a552524-Userguide-FPT-API-Management-26-1024x538-31090a8f47b6c783c342a4d441bba243.png");

/***/ },

/***/ 50098
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/401df3890679-Userguide-FPT-API-Management-32-1024x538-15290077ef23d9b6eaf66e4d7021dab3.png");

/***/ },

/***/ 959862
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7fe0874b39cf-Userguide-FPT-API-Management-57-1024x538-d2b916a6c88099b1a2f0fff395b6c676.png");

/***/ },

/***/ 116819
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/821efca8b899-Userguide-FPT-API-Management-29-1024x538-5129f96570ea2976fd060df779a9b563.png");

/***/ },

/***/ 778320
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8505cbdc1103-Userguide-FPT-API-Management-27-1024x538-da04c84baa7a587783ff367e4fd3a5df.png");

/***/ },

/***/ 684222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85d308c16f26-Userguide-FPT-API-Management-31-1024x538-4a903738d80bf2611bce46d302829c4f.png");

/***/ },

/***/ 513197
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8c38acd6f55c-Userguide-FPT-API-Management-62-1024x538-60b287442c00545610c99d29e8be92bc.png");

/***/ },

/***/ 303565
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a7aedaa105d2-Userguide-FPT-API-Management-30-1024x538-a57e6356bfdfc542e4acfc2c3b2ea8ef.png");

/***/ },

/***/ 996857
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ae92854bce40-Userguide-FPT-API-Management-54-1024x538-682880d4cb4b2276b24d9b8bc4b35a6b.png");

/***/ },

/***/ 84447
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bca437e1de8c-Userguide-FPT-API-Management-61-1024x590-8823ee2468f12fc1804910f44ffd9c4f.png");

/***/ },

/***/ 833047
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c31b656b58dc-Userguide-FPT-API-Management-58-1024x590-c1e55c7c04e0da7386dd24099e2e3866.png");

/***/ },

/***/ 119142
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cfc6b966c672-Userguide-FPT-API-Management-56-1024x538-8604425e83e6b6b709eac9d628823e04.png");

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