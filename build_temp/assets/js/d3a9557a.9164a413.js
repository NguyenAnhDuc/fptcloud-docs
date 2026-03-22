"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[27312],{

/***/ 537370
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_file_storage_high_performance_japan_su_dung_file_storage_high_performance_tren_baremetal_gpu_server_md_d3a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-file-storage-high-performance-japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server-md-d3a.json
const site_docs_file_storage_high_performance_japan_su_dung_file_storage_high_performance_tren_baremetal_gpu_server_md_d3a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server","title":"2. File Storage – High Performance","description":"Sử dụng File Storage - High Performance trên Baremetal (GPU Server)","source":"@site/docs/file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server.md","sourceDirName":"file-storage-high-performance","slug":"/file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server","permalink":"/file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Japan Su Dung File Storage High Performance Tren Baremetal Gpu Server","title":"2. File Storage – High Performance","source":"https://fptcloud.com/documents/file-storage-high-performance/?doc=japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server","parent":"https://fptcloud.com/documents/file-storage-high-performance","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial Setup","permalink":"/file-storage-high-performance/initial-setup"},"next":{"title":"Quan Ly Mountpoint","permalink":"/file-storage-high-performance/quan-ly-mountpoint"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Japan Su Dung File Storage High Performance Tren Baremetal Gpu Server',
	title: '2. File Storage – High Performance',
	source: 'https://fptcloud.com/documents/file-storage-high-performance/?doc=japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server',
	parent: 'https://fptcloud.com/documents/file-storage-high-performance',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. File Storage – High Performance';

const assets = {

};



const toc = [{
  "value": "1. Tổng quan",
  "id": "1-tổng-quan",
  "level": 2
}, {
  "value": "2. Hướng dẫn sử dụng",
  "id": "2-hướng-dẫn-sử-dụng",
  "level": 2
}, {
  "value": "A. Sử dụng image từ FPT AI FACTORY",
  "id": "a-sử-dụng-image-từ-fpt-ai-factory",
  "level": 3
}, {
  "value": "B. Nếu bạn sử dụng image Ubuntu tuỳ chỉnh",
  "id": "b-nếu-bạn-sử-dụng-image-ubuntu-tuỳ-chỉnh",
  "level": 3
}, {
  "value": "C. KH VM GPU - OS Ubuntu",
  "id": "c-kh-vm-gpu---os-ubuntu",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-file-storage--high-performance",
        children: "2. File Storage – High Performance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng File Storage - High Performance trên Baremetal (GPU Server)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tổng-quan",
      children: "1. Tổng quan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dịch vụ File Storage - High Performance hiện đã sẵn sàng cho hạ tầng Baremetal tại khu vực Nhật Bản. Để yêu cầu sử dụng, vui lòng liên hệ sale hoặc hỗ trợ kỹ thuật và cung cấp các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dung lượng yêu cầu (quota)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Subnet cần kết nối"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-hướng-dẫn-sử-dụng",
      children: "2. Hướng dẫn sử dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-sử-dụng-image-từ-fpt-ai-factory",
      children: "A. Sử dụng image từ FPT AI FACTORY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn đang dùng các image được cung cấp bởi FPT AI FACTORY thì DDN client đã được cài đặt sẵn, các bạn thực hiện theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Tạo thư mục mount"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create Mount Point\nmkdir /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Thực hiện lệnh mount thủ công"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create Mount Point\nmount -t lustre 100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3: Cấu hình tự động mount khi khởi động lại"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉnh sửa file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/fstab"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## LustreFS ##\n100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps lustre flock,defaults 0 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giải thích từng phần"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\"100.69.252.1@o2ib,100.69.252.2@o2ib:...:100.69.252.8@o2ib:/scratch**\"**"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "100.69.252.1,100.69.252.2..,100.69.252.8 là dải endpoint cố định."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/scratch"
            }), " là đường dẫn của filesystem trên Lustre server."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/mnt/hps"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mount Point trên client (đã tạo ở bước 1)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4: Kiểm tra"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "df -h -t lustre\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả mong đợi:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Filesystem                    Size  Used Avail Use% Mounted on\n...:/scratch                 11T   8.0K   11T   1%   /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-nếu-bạn-sử-dụng-image-ubuntu-tuỳ-chỉnh",
      children: "B. Nếu bạn sử dụng image Ubuntu tuỳ chỉnh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn dùng image tuỳ chỉnh thì cần tự build Packages theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Build Lustre Client"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể bỏ qua nếu đã build cho kernel hiện tại."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "wget https://s3-sgn10.fptcloud.com/file-storage-resource/exa-client-6.3.2.tar.gz\ntar xzvf exa-client-6.3.2.tar.gz\ncd exa-client\n./exa_client_deploy.py\n\n# Select option 2\n# Wait for configure and build\n# After installation is finished, select option 6\n# (compiled packages are saved in /opt/ddn/exascaler/debs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu phiên bản OS Ubuntu bạn đang dùng kernel 5.15.0-130-generic các bạn có thể bỏ qua bước build và tải các bản build sẵn ở dưới đây:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Install Lustre Pkg (for kernel 5.15.0-130-generic)\n\nwget https://s3-sgn10.fptcloud.com/package-pub/lustre-dev_2.14.0-ddn184-1_amd64.deb\nwget https://s3-sgn10.fptcloud.com/package-pub/lustre-client-modules-5.15.0-130-generic_2.14.0-ddn184-1_amd64.deb\nwget https://s3-sgn10.fptcloud.com/package-pub/lustre-client-utils_2.14.0-ddn184-1_amd64.deb\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2. Cài đặt Lustre Client"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cài đặt Lustre Client bằng cách sử dụng các gói ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".deb"
      }), " đã được build từ bước B1 hoặc có sẵn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bước này ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["chỉ thực hiện nếu đã có sẵn gói", (0,jsx_runtime.jsx)(_components.code, {
              children: ".deb"
            }), " phù hợp"]
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nếu không có sẵn gói, cần quay lại ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "bước 1"
          }), " để build gói trước khi cài đặt."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nếu kernel không khớp với gói ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".deb"
          }), ", có thể gặp lỗi và cần build lại tương thích với kernel hiện tại."]
        }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
          id: "install-lustre-pkg-for-kernel-5150-130-generic",
          children: "Install Lustre Pkg (for kernel 5.15.0-130-generic)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["sudo dpkg -i lustre-dev_2.14.0-ddn184-1_amd64.deb ", (0,jsx_runtime.jsx)(_components.br, {}), "\nlustre-client-modules-5.15.0-130-generic_2.14.0-ddn184-1_amd64.deb ", (0,jsx_runtime.jsx)(_components.br, {}), "\nlustre-client-utils_2.14.0-ddn184-1_amd64.deb"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3. Tối ưu cấu hình"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉnh sửa ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/modprobe.d/lustre.conf"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Edit or create file /etc/modprobe.d/lustre.conf like below \n[/etc/modprobe.d/lustre.conf]\noptions lnet networks=o2ib(bond0)    <==HERE!\noptions ko2iblnd peer_credits=32 peer_credits_hiw=16 concurrent_sends=64\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉnh sửa ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/lustre_client"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Edit or create file /etc/lustre_client like below\n[/etc/lustre_client]\n\n#++++++++++++++++++++++++++++++++++++\n# LNET Interface\nIF1=bond0        <==HERE!\nIF2=none\nIF3=none\nIF4=none\nIF5=none\nIF6=none\nIF7=none\nIF8=none\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4. Tạo mountpoint"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create Mount Point\nmkdir /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5. Thực hiện lệnh mount thủ công"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create Mount Point\n\nmount -t lustre 100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "B6. Cấu hình tự động mount"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉnh sửa file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/fstab"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Write followings entries to /etc/fstab\n##LustreFS##\n\n100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps lustre flock,defaults 0 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giải thích từng phần"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\"100.69.252.1@o2ib,100.69.252.2@o2ib:...:100.69.252.8@o2ib:/scratch**\"**"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "100.69.252.1,100.69.252.2..,100.69.252.8 là dải endpoint cố định."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/scratch"
            }), " là đường dẫn của filesystem trên Lustre server."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/mnt/hps"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mount Point trên client (đã tạo ở bước 1)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4: Kiểm tra"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "df -h -t lustre\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-kh-vm-gpu---os-ubuntu",
      children: "C. KH VM GPU - OS Ubuntu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn dùng image tuỳ chỉnh chạy Ubuntu thì cần tự build Packages theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Build Packages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bước này để ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "build gói Lustre Client"
      }), " từ mã nguồn trong trường hợp chưa có gói cài đặt phù hợp với kernel hiện tại của hệ thống."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Build Packages (skip if already built for same kernel)\n\nwget https://s3-sgn10.fptcloud.com/file-storage-resource/exa-client-6.3.2.tar.gz\ntar xzvf exa-client-6.3.2.tar.gz\ncd exa-client\n./exa_client_deploy.py\n\n# Select option 2\n# Wait for configure and build\n# After installation is finished, select option 6\n# (compiled packages are saved in /opt/ddn/exascaler/debs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Thiết lập Lustre Client"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bổ sung các config giúp tối ưu hiệu năng:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Edit or create file /etc/modprobe.d/lustre.conf like below \n[/etc/modprobe.d/lustre.conf]\noptions lnet networks=tcp(eth1)    <==HERE!\noptions ko2iblnd peer_credits=32 peer_credits_hiw=16 concurrent_sends=64\n\n\n\n# Edit or create file /etc/lustre_client like below\n[/etc/lustre_client]\n\n#++++++++++++++++++++++++++++++++++++\n# LNET Interface\nIF1=eth1        <==HERE!\nIF2=none\nIF3=none\nIF4=none\nIF5=none\nIF6=none\nIF7=none\nIF8=none\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Tạo mountpoint trên OS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create Mount Point\nmkdir /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Run mount command thủ công."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create Mount Point\n\nmount -t lustre 100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Thêm mục mount Lustre vào file /etc/fstab"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình hệ thống để tự động mount Lustre filesystem bằng cách thêm một dòng vào file /etc/fstab."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Write followings entries to /etc/fstab\n##LustreFS##\n\n100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch /mnt/hps lustre flock,defaults 0 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giải thích:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\"100.69.252.1@tcp,100.69.252.2@tcp:...:100.69.252.8@tcp:/scratch\"\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "100.69.252.1,100.69.252.2..,100.69.252.8 là dải endpoint của DDN cố định cho tất cả khách hàng."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/scratch là đường dẫn của filesystem trên Lustre server."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["/mnt/hps\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mount Point trên client (sẽ tạo ở bước 4)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Confirm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Confirm Client can mount lustre\ndf -h -t lustre\n\nFilesystem                                                                       Size  Used Avail Use% Mounted on\n100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch   11T  8.0K   11T   1% /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./region-nhat-ban",
        children: " Previous Region Nhật Bản "
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