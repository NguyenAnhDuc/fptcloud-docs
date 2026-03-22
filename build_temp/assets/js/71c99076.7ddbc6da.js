"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[62035],{

/***/ 818173
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_initial_khoi_ta_o_kubernetes_cluster_moi_md_71c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-initial-khoi-ta-o-kubernetes-cluster-moi-md-71c.json
const site_docs_managed_fpt_kubernetes_engine_initial_khoi_ta_o_kubernetes_cluster_moi_md_71c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/initial/khoi-ta-o-kubernetes-cluster-moi","title":"2. Managed – FPT Kubernetes Engine","description":"Khởi tạo Kubernetes Cluster mới","source":"@site/docs/managed-fpt-kubernetes-engine/initial/khoi-ta-o-kubernetes-cluster-moi.md","sourceDirName":"managed-fpt-kubernetes-engine/initial","slug":"/managed-fpt-kubernetes-engine/initial/khoi-ta-o-kubernetes-cluster-moi","permalink":"/managed-fpt-kubernetes-engine/initial/khoi-ta-o-kubernetes-cluster-moi","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khoi ta o kubernetes cluster moi","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=khoi-tạo-kubernetes-cluster-moi","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial setup","permalink":"/managed-fpt-kubernetes-engine/initial/initial-setup"},"next":{"title":"Lay thong tin truy cap cluster","permalink":"/managed-fpt-kubernetes-engine/initial/lay-thong-tin-truy-cap-cluster"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/initial/khoi-ta-o-kubernetes-cluster-moi.md


const frontMatter = {
	sidebar_label: 'Khoi ta o kubernetes cluster moi',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=khoi-tạo-kubernetes-cluster-moi',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "<strong>Tạo cluster với những VPC đã hỗ trợ Private Cluster</strong>",
  "id": "tạo-cluster-với-những-vpc-đã-hỗ-trợ-private-cluster",
  "level": 3
}, {
  "value": "<strong>Những điểm cần lưu ý khi tạo cụm cluster M-FKE:</strong>",
  "id": "những-điểm-cần-lưu-ý-khi-tạo-cụm-cluster-m-fke",
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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo Kubernetes Cluster mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Một số điều kiện bắt buộc để thực hiện thao tác này:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quota CPU, RAM, Storage, Instance phải đủ cho cấu hình mong muốn của Cluster."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "01 Public IP Available với loại Public & Private Controlplane Access Mode: Sử dụng cho việc expose apiserver cluster endpoint."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "01 VM Subnet: subnet được sử dụng cho Kubernetes Nodes. Cần tạo Subnet có Static IP Pool."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tạo-cluster-với-những-vpc-đã-hỗ-trợ-private-cluster",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo cluster với những VPC đã hỗ trợ Private Cluster"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu của FPT Portal chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Containers"
      }), " >", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Kubernetes Engine"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(765971)/* ["default"] */ .A) + "",
        width: "1919",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập thông tin cơ bản của cụm cluster sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.1. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basics Information:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(480998)/* ["default"] */ .A) + "",
        width: "690",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Nhập tên Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network"
        }), " : Subnet sử dụng để deploy các Virtual Machine (VM) của Kubernetes Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " Chọn version của Kubernetes Cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cluster Endpoint Access"
        }), " : Tùy chọn truy cập Endpoint cụm Kubernetes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Public"
      }), " : Apiserver endpoint của cụm k8s có thể truy cập từ public. Kết nối từ worker nodes tới apiserver đi qua đường public."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Public & Private"
      }), ": Apiserver endpoint của cụm k8s có thể truy cập từ public. Kết nối từ worker nodes tới apiserver đi qua đường private."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Private"
      }), " : Apiserver endpoint của cụm k8s chỉ có thể truy cập private trong VPC. Kết nối từ worker nodes tới apiserver đi qua đường private."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách chọn Cluster Endpoint phù hợp"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public"
      }), " : Nếu khách hàng cần truy cập Kubernetes API Endpoint từ bên ngoài VPC, sử dụng tùy chọn này."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public & Private"
      }), ": Dùng khi cần Endpoint có thể truy cập công khai và muốn whitelist IP truy cập vào apiserver endpoint này."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private"
      }), " : Dùng khi chỉ cần truy cập vào Endpoint trong nội bộ VPC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18294)/* ["default"] */ .A) + "",
        width: "1908",
        height: "904"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giải thích về Allow CIDR"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CIDR (Classless Inter-Domain Routing) là định dạng để xác định dải IP có quyền truy cập vào Kubernetes API Endpoint."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu để trống, tức là mặc định là 0.0.0.0/0, Endpoint sẽ có thể truy cập từ bất kỳ địa chỉ IP nào."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu nhập một giá trị cụ thể (ví dụ: 192.168.1.0/24), chỉ các IP trong dải 192.168.1.0 - 192.168.1.255 mới có thể truy cập."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Khách hàng cần chọn Cluster Endpoint Access phù hợp dựa trên yêu cầu bảo mật và kiến trúc mạng của hệ thống. Nếu cần bảo mật cao, khách hàng nên hạn chế CIDR chỉ cho phép các dải IP nội bộ thay vì 0.0.0.0/0."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Nếu chọn Public & Private hoặc Private, sẽ xuất hiện thêm trường Allow CIDR để nhập danh sách các dải địa chỉ IP có quyền truy cập vào Endpoint của Kubernetes Cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Với cluster endpoint access mode Public hoặc Public & Private, người dùng cần thêm IP SNAT của tất cả worker (trong trường hợp VPC sử dụng external firewall hoặc worker được gắn floating IP) vào trong các CIDR có thể kết nối tới controlplane của cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Ví dụ:"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dải subnet của worker được SNAT bằng IP 103.174.214.26, người dùng cần thêm CIDR 103.174.214.26/32 vào danh sách các CIDR được phép kết nối tới controlplane."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Worker trong cluster được gắn floatingIP 103.174.215.27, người dùng cần thêm CIDR 103.174.215.27/32 vào danh sách các CIDR được phép kết nối tới controlplane."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cấu hình Nodes Pool theo nhu cầu sử dụng sau đó click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(690985)/* ["default"] */ .A) + "",
        width: "3420",
        height: "1764"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(730908)/* ["default"] */ .A) + "",
        width: "3420",
        height: "1084"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "những-điểm-cần-lưu-ý-khi-tạo-cụm-cluster-m-fke",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Những điểm cần lưu ý khi tạo cụm cluster M-FKE:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ M-FKE quản lý các worker nodes thông qua Worker Group, là một group bao gồm các worker nodes có cấu hình giống nhau. Người sử dụng có thể phân chia worker groups cho các ứng dụng phù hợp. Hệ thống yêu cầu tối thiểu phải có 01 Worker Group (Base), người sử dụng không thể remove worker group này."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Trong mục cấu hình Worker Group, người dùng có thể thực hiện gán label cho worker group mong muốn. Label này sẽ được áp dụng cho tất cả các worker nodes thuộc worker group. Người dùng có thể thêm nhiều hoặc bỏ bớt các label, cũng như chỉnh sửa key/value của các label có sẵn. Các label này giúp người dùng dễ dàng trong việc triển khai ứng dụng trên các worker group riêng biệt theo nhu cầu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Worker Group 1 (Base):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Instance Type:"
            }), " Chọn loại Instance (CPU hoặc GPU) cho các ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worker Node"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Type:"
            }), " Chọn cấu hình (CPU & Memory) cho các ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worker Node"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Container Runtime:"
            }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Containerd"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Policy:"
            }), " Chọn loại ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Policy"
            }), " (tương ứng với IOPS) cho Worker Node Disk."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk (GB):"
            }), " Chọn dung lượng root disk cho các ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worker Node"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Network:"
            }), " Subnet sử dụng để deploy các VM của Kubernetes Cluster."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scale min:"
            }), " Số VM instance Worker Node tối thiểu cho cụm k8s. Recommend tối thiểu là 03 Nodes cho môi trường Production."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scale max:"
            }), " Số VM instance Worker Node tối đa cho một worker group trong cụm k8s."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Label:"
            }), " Đánh Label cho ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worker Group"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Worker Group n:"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Người dùng có thể thêm các worker group khi khởi tạo k8s cluster bằng cách click button ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ADD WORKER GROUP"
        }), ". ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Alt text",
          src: (__webpack_require__(11068)/* ["default"] */ .A) + "",
          width: "3420",
          height: "1894"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra, từ Worker Group 2 trở đi người dùng có thể cấu hình taint cho các worker group nhằm mục đích schedule ứng dụng trên các worker nodes. Các taint cũng có thể thêm, xóa, chỉnh sửa dễ dàng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(493235)/* ["default"] */ .A) + "",
        width: "3420",
        height: "1896"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Người dùng khi cấu hình label/taint cho worker group trên Unify Portal sẽ không thể xóa label/taint cho node trong worker group đó bằng kubectl (Hệ thống sẽ tự động thêm lại label/taint cho node theo cấu hình trên Unify Portal) do đó cần xóa cấu hình label/taint trên Unify Portal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      }), " là các cài đặt nâng cao dành cho người dùng. Ngoài ra, FPT Cloud hỗ trợ người dùng chỉ định subnet cho dải IP internal của LoadBalancer tích hợp trong Kubernetes. Nếu bạn không cần tùy chỉnh các tham số nâng cao này, hãy để mặc định."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(339012)/* ["default"] */ .A) + "",
        width: "1908",
        height: "910"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pod Network"
          }), " : Network sử dụng cho Pod trong cluster."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Service Network"
          }), " : Network sử dụng cho Service trong cluster."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Node Prefix"
          }), " : Subnet Prefix cho Pod trong Node"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Max Pod per Node"
          }), " : Số Pod tối đa trên mỗi Kubernetes Node."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Internal subnet Load Balancer(CIDR)"
          }), " : CIDR dùng để cấp phát IP cho các Load Balancer nội bộ. Có thể để trống nếu không dùng, hệ thống sẽ tự động cấp phát IP trong một subnet bất kỳ."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Internal Classic Loadbalancer IP Range (Deprecated)"
          }), " : Dải IP dành cho Load Balancer Classic hay còn gọi là LBv1 (sẽ ngừng cấp phát từ 19/04/2025)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách cấu hình Internal subnet Load Balancer (CIDR) hợp lệ:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(898083)/* ["default"] */ .A) + "",
        width: "578",
        height: "121"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dải CIDR cấu hình cho Internal subnet Load Balancer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "không được"
      }), " trùng bất kỳ CIDR subnet nào trong tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network > Subnets"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review & Create"
      }), ", hệ thống sẽ hiển thị các thông tin cụm cluster người dùng đã cấu hình trước đó, kiểm tra tài nguyên RAM, CPU, Storage,…"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(815762)/* ["default"] */ .A) + "",
        width: "1903",
        height: "909"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi hệ thống kiểm tra tài nguyên thành công, click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Kubernetes"
      }), " để tiến hành tạo cụm cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-kubernetes-cluster",
        children: " Previous Quản lý Kubernetes Cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-danh-sach-kubernetes-cluster-da-tao",
        children: " Next Xem danh sách Kubernetes Cluster đã tạo "
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

/***/ 18294
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3db7fd69b5a1-Screenshot_3-1802000ddd10ab1661736e3ba4fba426.png");

/***/ },

/***/ 339012
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4ee98eccee7f-Screenshot-2025-04-08-135836-492739d38d8616295361bb5fae550a1d.png");

/***/ },

/***/ 898083
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 690985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/92a23d1fb103-Create-K8s-1-f99b484458391784e4dffe1fbb1fe710.png");

/***/ },

/***/ 815762
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9692da065dfc-Screenshot-2025-04-08-140012-3516cdb1eb63bab2baca4d8dfdb84410.png");

/***/ },

/***/ 480998
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ba0b92de83c6-Picture1-12-6cd5274e0e496dd23c6c4d395ece859f.png");

/***/ },

/***/ 765971
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e724ae33b342-Screenshot-2025-03-20-134507-af2f707da2c378e26a1bbd193d0c8ba7.png");

/***/ },

/***/ 11068
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f3ed8556846f-Add-worker-group-d4b6f5033376cb92c69ff651a8c5b9af.png");

/***/ },

/***/ 493235
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f9656e3316a3-Taints-442a3918d039f3e6b302a691a18d8860.png");

/***/ },

/***/ 730908
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fea4fe96ccfd-Create-K8s-2-0b1e5c19cef2ab5e4d141c403bda7f6c.png");

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