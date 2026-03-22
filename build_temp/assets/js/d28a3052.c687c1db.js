"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[73592],{

/***/ 275239
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_index_md_d28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-index-md-d28.json
const site_docs_cloud_server_index_md_d28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/index","title":"Cloud Server","description":"Cloud Server","source":"@site/docs/cloud-server/index.md","sourceDirName":"cloud-server","slug":"/cloud-server/","permalink":"/cloud-server/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cloud Server","title":"Cloud Server","source":"https://fptcloud.com/documents/cloud-server/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"IaC (Terraform)","permalink":"/cloud-server/other/terraform"},"next":{"title":"Initial Setup","permalink":"/cloud-server/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/index.md


const frontMatter = {
	sidebar_label: 'Cloud Server',
	title: 'Cloud Server',
	source: 'https://fptcloud.com/documents/cloud-server/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cloud Server';

const assets = {

};



const toc = [{
  "value": "Trang chủ",
  "id": "trang-chủ",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Hướng dẫn nhanh (Quick Starts)",
  "id": "hướng-dẫn-nhanh-quick-starts",
  "level": 2
}, {
  "value": "Hướng dẫn chi tiết (Tutorials)",
  "id": "hướng-dẫn-chi-tiết-tutorials",
  "level": 2
}, {
  "value": "Các câu hỏi thường gặp (FAQs)",
  "id": "các-câu-hỏi-thường-gặp-faqs",
  "level": 2
}, {
  "value": "Một số gợi ý mẫu (Samples)",
  "id": "một-số-gợi-ý-mẫu-samples",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cloud-server",
        children: "Cloud Server"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với lợi thế rất lớn của mình, dịch vụ máy chủ ảo FPT (FPT Cloud Server) sẽ giúp bạn chủ động phát triển và triển khai các ứng dụng nhanh hơn mà không cần đầu tư trước quá nhiều vào phần cứng. Bạn có thể sử dụng FPT Cloud Server để khởi tạo một hoặc nhiều máy ảo tùy ý. Bạn cũng có thể tự mua thêm và thay đổi thông số, cài đặt mạng, storage nhanh chóng ngay trên giao diện FPT Portal mà không cần thuê nhân sự duy trì. Những điều cần lưu ý trước khi bạn tạo một máy chủ ảo ?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hệ điều hành chạy trên máy ảo: Mỗi HĐH đều có những điểm mạnh và điểm yếu khác nhau. Tùy vào nhu cầu và mục đích sử dụng mà bạn nên chọn HĐH cho phù hợp nhất. Tham khảo bài viết: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/windows-server-va-linux-server/",
        children: "https://fptcloud.com/windows-server-va-linux-server/"
      }), " Số lượng máy chủ sẽ tạo: Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định về số lượng tài nguyên được tạo, bạn nên xác định số lượng tối đa máy chủ sẽ tạo để FPT Cloud hỗ trợ bạn tốt nhất. Cấu hình RAM/CPU/Storage ban đầu: Tùy vào khối lượng công việc cần xử lý mà bạn nên chọn thông số phù hợp, tránh tình trạng thiếu hoặc thừa quá nhiều. Ngoài ra FPT Cloud hiện đã hỗ trợ resize không giới hạn máy chủ nên bạn hoàn toàn yên tâm nếu tương lai muốn mở rộng hệ thống. Vị trí địa lý đặt máy ảo: Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ đường truyền từ internet đến máy chủ trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ. Các tài nguyên liên quan khác: Ví dụ tài nguyên Network (VPC, Public IP v4, IP v6…), GPU, Storage Disk, …"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trang-chủ",
      children: "Trang chủ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-nhanh-quick-starts",
      children: "Hướng dẫn nhanh (Quick Starts)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./quick-starts/quick-starts-tao-mot-may-ao",
          children: " Tạo một máy ảo "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./quick-starts/create-vm-iso",
              children: " Lưu ý khi tạo máy ảo từ file iso "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./quick-starts/clone-instance",
          children: " Clone instance "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./quick-starts/quick-starts-tatbat-may-ao",
          children: " Tắt/Bật máy ảo "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./quick-starts/quick-starts-khoi-dong-lai-may-ao",
          children: " Khởi động lại máy ảo "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./quick-starts/lock-unlock-instance-deletion",
          children: " Lock & Unlock Instance Deletion "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./quick-starts/quick-starts-xoa-may-ao",
          children: " Xóa máy ảo "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết-tutorials",
      children: "Hướng dẫn chi tiết (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./vm-management/quan-ly-may-ao",
          children: " Quản lý máy ảo "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-khoi-tao-mot-may-ao-moi",
              children: " Khởi tạo một máy ảo mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./quick-starts/clone-instance",
              children: " Clone instance "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-ket-noi-vao-may-ao-windows",
              children: " Kết nối vào máy ảo Windows "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-ket-noi-vao-may-ao-linux",
              children: " Kết nối vào máy ảo Linux "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/attach-a-network-card-to-the-virtual-machine",
              children: " Gắn thêm card mạng (NIC) vào máy ảo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/remove-the-network-card-from-the-virtual-machine",
              children: " Gỡ card mạng (NIC) khỏi máy ảo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao",
              children: " Tra cứu thông tin, thông số kỹ thuật của máy ảo đã tạo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-thay-doi-thong-tin-cau-hinh-may-chu",
              children: " Thay đổi thông tin, cấu hình máy chủ "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-backup-may-chu-voi-snapshot",
              children: " Backup máy chủ với Snapshot "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./quick-starts/lock-unlock-instance-deletion",
              children: " Lock & Unlock Instance Deletion "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-xoa-may-ao",
              children: " Xóa máy ảo "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./gpu/gpu",
          children: " Quản lý GPU với Portal Console "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./gpu/gpu-general",
              children: " Quản lý GPU với Console Portal "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./gpu/gpu-specific",
              children: " Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./gpu/quan-ly-gpu-voi-hpc-portal",
          children: " Quản lý GPU Server với HPC Portal "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-quick-start",
              children: " Hướng dẫn nhanh "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-change-package",
              children: " Đổi cấu hình máy "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-fixed-rental",
              children: " Đặt thời gian thuê cố định "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-snapshot-backup",
              children: " Sao lưu image "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-hardware-fixation",
              children: " Cố định máy vật lý "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-rest-machine",
              children: " Khởi động lại máy "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-schedule-shutdown",
              children: " Đặt lịch tắt máy "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-clone-image",
              children: " Clone image "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-level-2-password",
              children: " Đặt mật khẩu cấp 2 "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./hpc/hpc-delete-image",
              children: " Xoá image "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./storage/block-storage",
          children: " Block Storage "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage/tao-storage-disk",
              children: " Tạo Storage Disk "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage/gan-storage-disk-vao-may-ao",
              children: " Gắn Storage Disk vào máy ảo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage/cau-hinh-o-dia-cho-may-ao-chay-windows",
              children: " Cấu hình ổ đĩa cho máy ảo chạy Windows "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage/go-storage-disk-khoi-may-ao",
              children: " Gỡ Storage Disk khỏi máy ảo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage/edit-storage-disk",
              children: " Edit Storage Disk "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./storage/xoa-storage-disk",
              children: " Xóa Storage Disk "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./other/profile-ssh-key",
          children: " Profile SSH Key "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./token/token",
          children: " Token "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./token/create-token",
              children: " Create token "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./token/revoke-token",
              children: " Revoke token đã khởi tạo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./other/fqas",
              children: " FQAs "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom Images\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./custom-images/custom-images-overview",
              children: " Custom Images Overview "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./custom-images/tai-len-custom-image",
              children: " Tải lên Custom Image "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./custom-images/xoa-custom-image",
              children: " Xóa Custom Image "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./vm-management/tutorials-quan-ly-instance-template",
          children: " Quản lý Instance Template "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-khoi-tao-template-tu-may-ao",
              children: " Khởi tạo template từ máy ảo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-quan-ly-template-duoc-tao-tu-may-ao",
              children: " Quản lý template được tạo từ máy ảo trên trang Custom Images "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-tao-instance-tu-template",
              children: " Tạo instance từ template "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/tutorials-xoa-template",
              children: " Xóa template "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./network/nat-instance",
          children: " NAT Instance "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./network/nic-overview-1",
          children: " Quản lý NIC (Network Interface Card) "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/overview-nic",
              children: " Overview "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/create-card-nic--primary",
              children: " Khởi tạo card Network Interface Card - Primary "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/disable-nic-card",
              children: " Disable Network Interface Card "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/enable-nic-card",
              children: " Enable Network Interface Card "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/add-card-nic--new",
              children: " Thêm Network Interface Card mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/convert-card",
              children: " Chuyển card thường thành card Primary "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/edit-ip-address",
              children: " Edit IP Address "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/change-address-mac",
              children: " Thay đổi địa chỉ MAC "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/delete-card-nic",
              children: " Xóa Network Interface Card "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/change-network-config",
              children: " Change Network Config "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./network/network-all",
          children: " Networking "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/networking-overview",
              children: " Networking Overview "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/gateway",
              children: " Gateway "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/quan-ly-floating-ip",
              children: " Quản lý Floating IP "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./qu%E1%BA%A3n-l%C3%BD-subnets",
              children: " Quản lý Subnets "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/allow-address-pair",
              children: " Allow address pair "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./network/quan-ly-security-group",
          children: " Quản lý Security Group "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/security-group-filter",
              children: " Filter Security Group "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/security-group-priority-rule",
              children: " Manage Priority Rule of Security Group "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./other/terraform",
          children: " IaC (Terraform) "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./instance-group/instance-group",
          children: " Quản lý Instance Group với chính sách Affinity & Anti-Affinity "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./instance-group/overview-affinity",
              children: " Giới thiệu "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./instance-group/create-instance-group",
              children: " Khởi tạo một Instance Group mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./instance-group/edit-instance-group-specific",
              children: " Chỉnh sửa Instance Group "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./instance-group/add-instance-instance-group",
              children: " Gắn máy ảo vào Instance Group "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./instance-group/delete-instance-group",
              children: " Xóa một Instance Group "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./other/overview-bell",
          children: " Notification Bell "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./token/create-token",
              children: " Create token "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./token/revoke-token",
              children: " Revoke token đã khởi tạo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./other/fqas",
              children: " FQAs "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./other/project-structure",
          children: " Quản lý Project "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./other/quan-ly-project",
              children: " Quản lý Project "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./network/select-project-when-creating-vpc",
              children: " Chọn Project khi tạo VPC "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/header-project",
              children: " Thay đổi giao diện header "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./other/new-quota",
          children: " Sử dụng dịch vụ tính tiền theo phương thức PAYG "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: " "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./scheduling/instance-schedule",
          children: " Auto schedule to on-off Instance "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/schedule-overview",
              children: " Instance Schedule Overview "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/create-new-instance",
              children: " Tạo một instance schedule mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./vm-management/view-detail-instance",
              children: " Xem chi tiết một instance schedule "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/attach-schedule-to-instance",
              children: " Gắn một hoặc nhiều máy ảo vào instance schedule "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/detach-schedule-to-instance",
              children: " Gỡ một hoặc nhiều máy ảo vào instance schedule "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/delete-instance-schedule",
              children: " Xóa một instance schedule "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./scheduling/schedule-snapshotvm",
          children: " Lịch snapshot máy ảo "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/create-schedule-snapshotvm",
              children: " Tạo lịch snapshot máy ảo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/viewschedule-snapshotvm",
              children: " Xem chi tiết lịch snapshot máy ảo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/editschedule-snapshotvm",
              children: " Chỉnh sửa lịch snapshot máy ảo "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/deleteschedule-snapshotvm",
              children: " Xóa lịch snapshot máy ảo "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./scheduling/schedule-snapshotstorage",
          children: " Lịch snapshot ổ đĩa "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/createschedule-snapshotstorage",
              children: " Tạo lịch snapshot ổ đĩa "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/viewschedule-snapshotstorage",
              children: " Xem chi tiết lịch snapshot ổ đĩa "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/editschedule-snapshotstorage",
              children: " Chỉnh sửa lịch snapshot ổ đĩa "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./scheduling/deleteschedule-snapshotstorage",
              children: " Xóa lịch snapshot ổ đĩa "
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-câu-hỏi-thường-gặp-faqs",
      children: "Các câu hỏi thường gặp (FAQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./other/question-2",
          children: " Tôi có thể tùy chỉnh toàn bộ rule trong các security group không? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./other/question-1",
          children: " Tôi có thể hiệu chỉnh các address pair đã khởi tạo không? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./other/question-",
          children: " Nat Instance có thể được sử dụng như 1 instance thông thường không? "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "một-số-gợi-ý-mẫu-samples",
      children: "Một số gợi ý mẫu (Samples)"
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