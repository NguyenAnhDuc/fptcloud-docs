"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[77952],{

/***/ 667529
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_server_pool_khoi_tao_server_pool_md_947_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-server-pool-khoi-tao-server-pool-md-947.json
const site_docs_load_balancer_server_pool_khoi_tao_server_pool_md_947_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/server-pool/khoi-tao-server-pool","title":"Khởi tạo Server Pool","description":"*","source":"@site/docs/load-balancer/server-pool/khoi-tao-server-pool.md","sourceDirName":"load-balancer/server-pool","slug":"/load-balancer/server-pool/khoi-tao-server-pool","permalink":"/load-balancer/server-pool/khoi-tao-server-pool","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khởi tạo Server Pool","title":"Khởi tạo Server Pool","source":"https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-server-pool","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Chỉnh sửa cấu hình Health check","permalink":"/load-balancer/server-pool/chinh-sua-cau-hinh-health-check"},"next":{"title":"Quản lý Server Pool","permalink":"/load-balancer/server-pool/quan-ly-server-pool"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/server-pool/khoi-tao-server-pool.md


const frontMatter = {
	sidebar_label: 'Khởi tạo Server Pool',
	title: 'Khởi tạo Server Pool',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-server-pool',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Khởi tạo Server Pool';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "khởi-tạo-server-pool",
        children: "Khởi tạo Server Pool"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Server pool"
      }), " (nhóm máy chủ) là tập hợp các máy chủ backend,chịu trách nhiệm phân phối lưu lượng truy cập đến các máy chủ backend để cải thiện hiệu suất, tính khả dụng và độ tin cậy của dịch vụ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.Tạo Server pool"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Server pool"
      }), " đã được tạo cùng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " khi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Server pool"
      }), " cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer,"
      }), " bạn thao tác theo hướng dẫn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer Details,"
      }), " chọn tên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " tương ứng trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer Management."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Server pool"
      }), " , tiếp theo ấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create server pool."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại đây người dùng nhập thông tin cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Server pool."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server pool name:"
        }), " Nhập tên cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Server pool."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Nhập mô tả cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Server Spool."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol:"
        }), " Chọn giao thức sử dụng kết nối các máy chủ: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP/ HTTPS /PROXY /PROXYV2 /TCP /UDP."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add server:"
        }), " Chọn máy ảo đã được tạo từ list. Tại đây người dùng được chỉnh sửa:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["+", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Port:"
      }), " Port mà Member sẽ lắng nghe để xử lý các yêu cầu đến. Port này thường liên quan đến dịch vụ cụ thể mà Member cung cấp"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["+", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " Trọng số quy định mức độ ưu tiên của mỗi Pool Member trong việc xử lý các yêu cầu. Các Member có trọng số cao sẽ nhận được nhiều yêu cầu hơn so với các Member có trọng số thấp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced setting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Algorithm:"
        }), " Chọn thuật toán cân bằng tải sử dụng bao gồm:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Round Robin:"
      }), " Thuật toán lựa chọn các Member (server) theo trình tự. Theo đó, Load Balancer sẽ bắt đầu đi từ Member (server) số 1 trong danh sách của nó ứng với yêu cầu đầu tiên. Tiếp đó, nó sẽ di chuyển dần xuống trong danh sách theo thứ tự và bắt đầu lại ở đầu trang khi đến Member (server) cuối cùng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Least Connection:"
      }), " Các request sẽ được chuyển vào server có ít kết nối (active connection) nhất trong hệ thống tại thời điểm hiện tại. Thuật toán này được coi như thuật toán động, vì nó phải đếm số kết nối đang hoạt động của server."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Source IP:"
      }), " Thuật toán này kết hợp địa chỉ IP nguồn và đích của client và server để tạo ra hash key duy nhất. Key này được sử dụng để phân bổ client đến một server cụ thể, và nó có thể được tạo lại nếu session bị timeout hay ngắt kết nối do một lý do nào đó. Khi đó request của client vẫn được chuyển đến cùng một server mà nó đã sử dụng trước đó."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sticky session:"
        }), " là phương pháp để đảm bảo rằng các yêu cầu từ cùng một người dùng sẽ luôn được chuyển đến cùng một máy chủ trong một khoảng thời gian nhất định. Điều này giúp duy trì trạng thái của phiên làm việc của người dùng trên một máy chủ cụ thể."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn phương pháp sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "App Cookie, HTTP Cookie, Source IP"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "None"
      }), " để không sử dụng tính năng, khi chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "App Cookie"
      }), " người dùng cần nhập thêm thông tin cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cookie name."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol: Chọn giao thức phù hợp với giao thức của Server pool theo bảng sau:"
        })
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: " "
            }), (0,jsx_runtime.jsx)(_components.strong, {
              children: "Health Monitor Pool"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTP"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTPS"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PING"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SCTP"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLS-HELLO"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UDP-CONNECT"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROXY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROXYV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi chọn giao thức ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP/HTTPS"
      }), " , người dùng cần khai báo thêm thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path"
        }), " : Đường dẫn path để kiểm tra. Chú ý cần nhập đúng định dạng path bắt đầu bằng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "/."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP method:"
        }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP Method"
        }), " mà ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Load Balancer"
        }), " sử dụng khi gửi yêu cầu health check đến máy chủ backend. Điều này cho phép bạn xác định liệu health check nên sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CONNECT/"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DELETE/ GET/ HEAD,..."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected Code:"
        }), " Nhập mã trạng thái HTTP mà máy chủ backend phải trả về trong phản hồi để được coi là healthy, có thể là một giá trị như 200 hoặc một list các giá trị như 200, 202 hoặc một khoảng giá trị như 200-204"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced selection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max retries down:"
        }), " Nhập số lần kiểm tra sức khỏe liên tiếp thất bại trước khi một máy chủ backend được đánh dấu là unhealthy. Giá trị cho phép nhập là từ 1-10, mặc định là 3."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max retries:"
        }), " Nhập số lần health check liên tiếp phải thành công để một máy chủ backend được xem là healthy. Giá trị cho phép nhập là từ 1-10, mặc định là 3."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delay(s):"
        }), " Nhập khoảng thời gian giữa các lần health check được gửi đến máy chủ backend. Nó xác định tần suất health check của máy chủ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeout(s):"
        }), " Thời gian tối đa cho một yêu cầu health check được gửi đến máy chủ backend trước khi được coi là thất bại. Nếu máy chủ không trả lời trong thời gian này, yêu cầu kiểm tra sẽ được xem là thất bại."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create server pool"
      }), " để thực hiện tạo hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để huỷ bỏ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-server-pool",
        children: " Previous Quản lý Server Pool "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./them-bot-member-cho-server-pool",
        children: " Next Thêm/bớt member cho Server pool "
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