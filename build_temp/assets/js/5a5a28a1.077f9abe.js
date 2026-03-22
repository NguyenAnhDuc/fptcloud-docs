"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[1399],{

/***/ 404661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_initial_setup_md_5a5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-initial-setup-md-5a5.json
const site_docs_cloud_server_initial_setup_md_5a5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/initial-setup","title":"Initial Setup","description":"*","source":"@site/docs/cloud-server/initial-setup.md","sourceDirName":"cloud-server","slug":"/cloud-server/initial-setup","permalink":"/cloud-server/initial-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Initial Setup","title":"Initial Setup","source":"https://fptcloud.com/documents/cloud-server/?doc=Initial-Setup","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cloud Server","permalink":"/cloud-server/"},"next":{"title":"Accountpassword qua fcdclient cu","permalink":"/fpt-cloud-desktop/accountpassword-qua-fcdclient-cu"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/initial-setup.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Initial Setup',
	title: 'Initial Setup',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=Initial-Setup',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Initial Setup';

const assets = {

};



const toc = [{
  "value": "<strong>1. Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal</strong>",
  "id": "1-tạo-tài-khoản-fpt-cloud-và-đăng-nhập-vào-fpt-portal",
  "level": 2
}, {
  "value": "<strong>2. Tạo một cặp key SSH</strong>",
  "id": "2-tạo-một-cặp-key-ssh",
  "level": 2
}, {
  "value": "<strong>3. Kiểm tra trạng thái Subnets</strong>",
  "id": "3-kiểm-tra-trạng-thái-subnets",
  "level": 2
}, {
  "value": "<strong>4. Tạo một Security Group</strong>",
  "id": "4-tạo-một-security-group",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "initial-setup",
        children: "Initial Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu đây là lần đầu tiên bạn sử dụng FPT Cloud Server, trước tiên hãy kiểm tra và hoàn thành các công việc sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tạo-tài-khoản-fpt-cloud-và-đăng-nhập-vào-fpt-portal",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để bắt đầu sử dụng dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud WAF"
      }), " , người dùng cần đăng nhập vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hãy truy cập vào ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com",
        children: "https://console.fptcloud.com"
      }), " và đăng nhập bằng tài khoản/mật khẩu FPT Cloud đã được cấp. Chọn đúng Tenant, Region, VPC cần sử dụng dịch vụ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu chưa có tài khoản ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud"
      }), " , người dùng hãy truy cập trang chủ tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/",
        children: "https://fptcloud.com/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau đó chọn chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sign Up"
      }), " và nhập các thông tin theo hướng dẫn của hệ thống. Người dùng sẽ được bộ phận hỗ trợ liên hệ ngay sau đó và xác nhận các thông tin để tạo tài khoản."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình thao tác nếu gặp bất kỳ lỗi nào hãy liên hệ ngay cho đội ngũ Support của chúng tôi để được hỗ trợ."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tạo-một-cặp-key-ssh",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Tạo một cặp key SSH"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Với các máy chủ nhân Linux, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud"
      }), " hỗ trợ người dùng sử dụng 2 phương thức bảo mật là sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password"
      }), " hoặc cặp ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Key"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password"
        }), " là phương thức bảo mật cơ bản, được sử dụng rộng rãi nhưng tiềm ẩn rất nhiều rủi ro về bảo mật (bị lộ lọt, bị scan,…) dẫn đến máy chủ bị hack."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH Key"
        }), " là phương thức được đánh giá là bảo mật hơn, an toàn hơn rất nhiều so với dùng Password. FPT Cloud khuyến nghị người dùng sử dụng phương thức này cho các máy chủ quan trọng của mình."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo cặp key SSH, người dùng cần đăng nhập thành công vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Management"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Import SSH key"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 1",
        src: (__webpack_require__(660365)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin cần thiết để tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Key"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 2",
        src: (__webpack_require__(968922)/* ["default"] */ .A) + "",
        width: "596",
        height: "321"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên SSH Key."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Public Key"
          }), " : ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Public Key"
          }), " để hệ thống gen ra ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Private Key"
          }), ". Nếu người dùng đã có sẵn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Public key"
          }), " , hãy nhập vào ô ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Public key"
          }), ". Nếu chưa có, hãy chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Generate new key pair"
          }), ". Hệ thống sẽ tự tạo ngẫu nhiên một ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Public Key"
          }), " hợp lệ."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Khi đã đầy đủ thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), ". Hệ thống sẽ tiến hành tạo cặp ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Key"
      }), " và tự động download file key về máy với định dạng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "< >.pem"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 3",
        src: (__webpack_require__(695443)/* ["default"] */ .A) + "",
        width: "1024",
        height: "539"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lưu ý: File ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private key"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "< >.pem"
      }), " chỉ được cung cấp 1 lần duy nhất ở bước 5. Người dùng cần lưu trữ ở nơi an toàn tránh việc bị mất quyền truy cập vào máy chủ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-kiểm-tra-trạng-thái-subnets",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Kiểm tra trạng thái Subnets"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để khởi tạo máy ảo người dùng cần có một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet"
      }), " đang hoạt động trong VPC, hệ thống cần lấy một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private IP"
      }), " từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet"
      }), " này để gắn cho máy ảo chuẩn bị tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước tạo một Subnet mới:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create subnet"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(90067)/* ["default"] */ .A) + "",
        width: "975",
        height: "222"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin hệ thống yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Nhập Tên gợi nhớ của Subnet."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " : Hiện tại đang hỗ trợ 2 loại:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Routed"
              }), " : Mạng con sẽ định tuyến với Internet thông qua cổng NAT"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Isolated"
              }), " : Mạng con sẽ không định tuyến với Internet"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Address (CIDR)"
          }), " : Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CIDR"
          }), " hợp lệ."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gateway IP"
          }), " : Nhập địa chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Gateway"
          }), " hợp lệ"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Static IP Pool (optional)"
          }), " : Nhập dải IP bạn muốn sử dụng, nếu không nhập hệ thống sẽ lấy toàn bộ IP từ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CIDR"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Primary DNS"
          }), " : Nhập địa chỉ DNS theo định dạng IPv4. Nếu không nhập, hệ thống sẽ tự động tạo giá trị mặc định là 8.8.8.8."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Secondary DNS (optional)"
          }), " : Nhập Secondary DNS theo định dang địa chỉ IPv4. Nếu không nhập, hệ thống sẽ tự động tạo giá trị mặc định là 8.8.8.8."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add tag (optional)"
          }), " : Chọn thẻ để gắn cho subnet"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(441547)/* ["default"] */ .A) + "",
        width: "975",
        height: "773"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create subnet"
      }), " để tạo Subnet mới. Hệ thống sẽ tiến hành xử lý và thông báo kết quả"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet"
      }), " vừa tạo sẽ được hiển thị ở bảng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(898541)/* ["default"] */ .A) + "",
        width: "975",
        height: "287"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-tạo-một-security-group",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Tạo một Security Group"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " hoạt động như một tường lửa mạng ảo, giúp kiểm soát lưu lượng traffic bằng cách chặn hoặc mở các kết nối vào (inbound) và ra (outbound) cho máy ảo. Trong FPT Cloud, có hai loại tường lửa:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Security Group: Loại này kiểm soát lưu lượng traffic ra vào internet của máy ảo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Distributed Firewall: Loại này kiểm soát lưu lượng traffic ra vào máy ảo trong mạng nội bộ."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc sử dụng các loại tường lửa này đảm bảo an toàn cho máy ảo bằng cách ngăn chặn các cuộc tấn công như DDoS và các mối đe dọa khác từ internet hoặc virus."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để quản lý các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , người dùng vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Groups"
      }), " ở nhóm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Networking"
      }), ". Ở đây người dùng có thể tạo mới, xem danh sách, sửa thông tin, xóa các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " trong VPC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thao tác chi tiết để tạo một Security Group:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Security Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(778266)/* ["default"] */ .A) + "",
        width: "940",
        height: "494"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin hệ thống yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên security group, mặc định hệ thống sẽ tự khởi tạo một tên để khách hàng nhanh chóng sử dụng."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " :"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Security group: Kiểm soát traffic ra vào internet của máy ảo"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Distributed Firewall: Kiểm soát traffic ra vào mạng nội bộ của máy ảo"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnet"
          }), " : Chọn Subnet trong danh sách."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Applied CIDR / instances"
          }), " : Chọn máy ảo hoặc dãy CIDR sẽ áp dụng. Bạn có thể bỏ qua trường này và thêm vào sau."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure security rule"
          }), " :"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Inbound rule: Kiểm soát traffic đi vào máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Outbound rule: Kiểm soát traffic ra khỏi máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(827713)/* ["default"] */ .A) + "",
        width: "940",
        height: "767"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create security group"
      }), ". Hệ thống sẽ tiến hành xử lý và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " vừa tạo sẽ được hiển thị ở bảng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(950331)/* ["default"] */ .A) + "",
        width: "940",
        height: "322"
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

/***/ 90067
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/161dcee605e3-image-1744794276761-aad52ce31517e3f6eb989121946bf5fd.png");

/***/ },

/***/ 827713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26de46ab8f93-image-1711095173572-d6360a9d83ad58c7f794c3eb4f36be5b.png");

/***/ },

/***/ 695443
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3df2476e1fed-Userguide-FPT-Cloud-Server-2022-3-1024x539-242dd05168cea16e693bbb31506af8a1.png");

/***/ },

/***/ 660365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8b0e181c77f8-Userguide-FPT-Cloud-Server-2022-1-1024x538-bf2effba05cea1144f0f6c9f073e0194.png");

/***/ },

/***/ 898541
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c162eaf928a5-image-1744794442277-405e631f83b0005841d351534f70b432.png");

/***/ },

/***/ 950331
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ddaa6e9950d4-image-1711095189056-5753c61064f27d6254e3eff0a81eb0fd.png");

/***/ },

/***/ 441547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ead4183b2773-image-1744794289261-58b5c37f1151b930cec2a7decdee21fc.png");

/***/ },

/***/ 778266
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f0d896b0e14d-image-1711095113934-c26b469c1d07a1f8e9d9c4d1814da097.png");

/***/ },

/***/ 968922
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f88ee771a9f3-Userguide-FPT-Cloud-Server-2022-2-c1ccd0b4447c6907a74d4740ced1536a.png");

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