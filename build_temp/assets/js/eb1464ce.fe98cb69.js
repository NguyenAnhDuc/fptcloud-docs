"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26939],{

/***/ 585517
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_vm_management_tutorials_backup_may_chu_voi_snapshot_md_eb1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-vm-management-tutorials-backup-may-chu-voi-snapshot-md-eb1.json
const site_docs_cloud_server_vm_management_tutorials_backup_may_chu_voi_snapshot_md_eb1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/vm-management/tutorials-backup-may-chu-voi-snapshot","title":"Backup máy chủ với Snapshot","description":"*","source":"@site/docs/cloud-server/vm-management/tutorials-backup-may-chu-voi-snapshot.md","sourceDirName":"cloud-server/vm-management","slug":"/cloud-server/vm-management/tutorials-backup-may-chu-voi-snapshot","permalink":"/cloud-server/vm-management/tutorials-backup-may-chu-voi-snapshot","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Backup máy chủ với Snapshot","title":"Backup máy chủ với Snapshot","source":"https://fptcloud.com/documents/cloud-server/?doc=tutorials-backup-may-chu-voi-snapshot","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý máy ảo","permalink":"/cloud-server/vm-management/quan-ly-may-ao"},"next":{"title":"Kết nối vào máy ảo Linux","permalink":"/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-linux"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/vm-management/tutorials-backup-may-chu-voi-snapshot.md


const frontMatter = {
	sidebar_label: 'Backup máy chủ với Snapshot',
	title: 'Backup máy chủ với Snapshot',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=tutorials-backup-may-chu-voi-snapshot',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Backup máy chủ với Snapshot';

const assets = {

};



const toc = [{
  "value": "<strong>Khởi tạo và quản lý snapshot từ máy ảo</strong>",
  "id": "khởi-tạo-và-quản-lý-snapshot-từ-máy-ảo",
  "level": 2
}, {
  "value": "<strong>1. Khởi tạo snapshot</strong>",
  "id": "1-khởi-tạo-snapshot",
  "level": 3
}, {
  "value": "<strong>2. Khởi tạo máy ảo từ snapshot</strong>",
  "id": "2-khởi-tạo-máy-ảo-từ-snapshot",
  "level": 3
}, {
  "value": "<strong>3. Xóa snapshot đã tạo</strong>",
  "id": "3-xóa-snapshot-đã-tạo",
  "level": 3
}, {
  "value": "<strong>Khởi tạo và quản lý snapshot từ storage disk</strong>",
  "id": "khởi-tạo-và-quản-lý-snapshot-từ-storage-disk",
  "level": 2
}, {
  "value": "<strong>1. Khởi tạo snapshot</strong>",
  "id": "1-khởi-tạo-snapshot-1",
  "level": 3
}, {
  "value": "<strong>2. Tạo storage disk từ snapshot đã có</strong>",
  "id": "2-tạo-storage-disk-từ-snapshot-đã-có",
  "level": 3
}, {
  "value": "<strong>3. Xóa snapshot tạo từ storage disk</strong>",
  "id": "3-xóa-snapshot-tạo-từ-storage-disk",
  "level": 3
}, {
  "value": "<strong>Khởi tạo và quản lý snapshot đối với loại dịch vụ Specific</strong>",
  "id": "khởi-tạo-và-quản-lý-snapshot-đối-với-loại-dịch-vụ-specific",
  "level": 2
}, {
  "value": "<strong>1. Tạo Snapshot cho máy ảo</strong>",
  "id": "1-tạo-snapshot-cho-máy-ảo",
  "level": 3
}, {
  "value": "<strong>2. Khôi phục máy ảo từ snapshot</strong>",
  "id": "2-khôi-phục-máy-ảo-từ-snapshot",
  "level": 3
}, {
  "value": "<strong>3. Xóa instance snapshot</strong>",
  "id": "3-xóa-instance-snapshot",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "backup-máy-chủ-với-snapshot",
        children: "Backup máy chủ với Snapshot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " là hành động chụp nhanh lại hiện trạng của máy ảo tại một thời điểm cụ thể. Kết quả tạo ra những bản sao chứa toàn bộ nội dung của hệ thống ở thời điểm chụp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu người dùng có nhu cầu lưu trữ định kỳ ở nhiều thời điểm khác nhau, hãy tham khảo dịch vụ FPT Backup."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể chọn thời điểm hệ thống chạy ổn định nhất, tạo một bản ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), ". Sau này nếu trong hệ thống có một phần mềm nào đấy bị lỗi không thể khắc phục hoặc dữ liệu quan trọng bị xóa nhầm. Người dùng chỉ cần khôi phục lại máy ảo về thời điểm tạo Snapshot là đã giải quyết được vấn đề."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "khởi-tạo-và-quản-lý-snapshot-từ-máy-ảo",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo và quản lý snapshot từ máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-khởi-tạo-snapshot",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Khởi tạo snapshot"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy ảo cần tạo snapshot. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create snapshot"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(956632)/* ["default"] */ .A) + "",
        width: "940",
        height: "462"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create snapshot"
      }), " , hiển thị modal ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance snapshot"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(15712)/* ["default"] */ .A) + "",
        width: "427",
        height: "378"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create snapshot"
      }), " để tạo snapshot. Sau khi xác nhận tạo snapshot, hệ thống sẽ tiến hành kiểm tra tài nguyên, tạo image snapshot và thông báo kết quả xử lý."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(436030)/* ["default"] */ .A) + "",
        width: "1113",
        height: "405"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-khởi-tạo-máy-ảo-từ-snapshot",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Khởi tạo máy ảo từ snapshot"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của snapshot chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Launch as Instance"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(151322)/* ["default"] */ .A) + "",
        width: "1211",
        height: "492"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Hiển thị modal ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance"
      }), " từ snapshot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(406030)/* ["default"] */ .A) + "",
        width: "940",
        height: "462"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Tạo máy ảo từ snapshot thành công, hệ thống hiển thị máy ảo tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(984473)/* ["default"] */ .A) + "",
        width: "1115",
        height: "307"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-xóa-snapshot-đã-tạo",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Xóa snapshot đã tạo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của snapshot chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Image"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(606416)/* ["default"] */ .A) + "",
        width: "1204",
        height: "468"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete snapshot"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xác nhận xóa snapshot, hệ thống sẽ tiến hành xóa image, trả lại tài nguyên snapshot đã chiếm dụng cho VPC. Người dùng sẽ được thông báo khi quá trình xóa snapshot hoàn thành."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu người dùng tích chọn vào ô “ ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Delete all volume snapshots attached to this image"
      }), " ” thì những snapshot được tạo từ storage disk gắn trong máy ảo đó sẽ bị xóa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(5276)/* ["default"] */ .A) + "",
        width: "738",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "khởi-tạo-và-quản-lý-snapshot-từ-storage-disk",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo và quản lý snapshot từ storage disk"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-khởi-tạo-snapshot-1",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Khởi tạo snapshot"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disk"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy ảo cần tạo snapshot. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create volume snapshot"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(590142)/* ["default"] */ .A) + "",
        width: "1237",
        height: "646"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create volume snapshot"
      }), " để tạo"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(111223)/* ["default"] */ .A) + "",
        width: "744",
        height: "770"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Tạo snapshot thành công, hiển thị tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshots"
      }), " trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage snapshot"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(249173)/* ["default"] */ .A) + "",
        width: "1118",
        height: "380"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-tạo-storage-disk-từ-snapshot-đã-có",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Tạo storage disk từ snapshot đã có"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của snapshot chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create storage disk"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(781864)/* ["default"] */ .A) + "",
        width: "1249",
        height: "456"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create storage disk"
      }), " để tạo"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(370920)/* ["default"] */ .A) + "",
        width: "940",
        height: "459"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-xóa-snapshot-tạo-từ-storage-disk",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Xóa snapshot tạo từ storage disk"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapshot"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của snapshot chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Snapshot"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(781469)/* ["default"] */ .A) + "",
        width: "1231",
        height: "438"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete snapshot"
      }), " để tiến hành xóa"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(696)/* ["default"] */ .A) + "",
        width: "741",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "khởi-tạo-và-quản-lý-snapshot-đối-với-loại-dịch-vụ-specific",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo và quản lý snapshot đối với loại dịch vụ Specific"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-tạo-snapshot-cho-máy-ảo",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tạo Snapshot cho máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy ảo cần tạo snapshot, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create snapshot"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(341727)/* ["default"] */ .A) + "",
        width: "1236",
        height: "885"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " trong popup xác nhận để tiến hành tạo snapshot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(124542)/* ["default"] */ .A) + "",
        width: "940",
        height: "445"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xác nhận tạo snapshot, hệ thống sẽ tiến hành kiểm tra tài nguyên, tạo image snapshot và thông báo kết quả xử lý."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trung bình khi khởi tạo snapshot sẽ mất tầm 30 phút, tùy thuộc vào dòng máy và dữ liệu hiện tại trên máy ảo. Người dùng sẽ được thông báo khi quá trình tạo snapshot đã hoàn thành."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Mỗi instance sẽ được tạo và lưu trữ 1 snapshot. Snapshot tạo được mới nhất sẽ ghi đè lên snapshot đã tạo của instance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-khôi-phục-máy-ảo-từ-snapshot",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Khôi phục máy ảo từ snapshot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Thao tác này chỉ áp dụng được cho instance đã tạo snapshot thành công. Người dùng vui lòng kiểm tra instance cần thiết đã có snapshot hay chưa."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy ảo cần khôi phục, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore snapshot"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(428509)/* ["default"] */ .A) + "",
        width: "1229",
        height: "878"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore instance"
      }), " trong popup xác nhận để tiến hành khôi phục."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(990831)/* ["default"] */ .A) + "",
        width: "940",
        height: "433"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xác nhận khôi phục máy ảo từ snapshot, hệ thống sẽ tiến hành khôi phục sau khi kiểm tra dữ liệu snapshot. Trung bình khi khôi phục máy ảo từ snapshot sẽ mất tầm 30 phút, tùy thuộc vào dòng máy và dữ liệu hiện tại trên máy. Trong suốt quá trình này, máy ảo có thể sẽ được tắt, người dùng sẽ không thể thao tác với máy tạm thời cho đến khi quá trình khôi phục hoàn thành."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng sẽ được thông báo khi quá trình restore đã hoàn tất và máy ảo được bật lại."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-xóa-instance-snapshot",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Xóa instance snapshot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Thao tác này chỉ áp dụng được cho instance đã tạo snapshot thành công. Người dùng vui lòng kiểm tra instance cần thiết đã có snapshot hay chưa. Snapshot đã xóa không thể khôi phục lại được."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hãy cẩn thận khi thực hiện thao tác này."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy ảo cần xóa image, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete snapshot"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(195125)/* ["default"] */ .A) + "",
        width: "1222",
        height: "882"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete snapshot"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(999722)/* ["default"] */ .A) + "",
        width: "734",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xác nhận xóa snapshot, hệ thống sẽ tiến hành xóa image, trả lại tài nguyên snapshot đã chiếm dụng cho VPC. Người dùng sẽ được thông báo khi quá trình xóa snapshot hoàn thành."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-thay-doi-thong-tin-cau-hinh-may-chu",
        children: " Previous Thay đổi thông tin, cấu hình máy chủ "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./lock-unlock-instance-deletion",
        children: " Next Lock & Unlock Instance Deletion "
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

/***/ 370920
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03166cff4d90-image-1712653495975-87268d943056f5618c2b99e0f4f43900.png");

/***/ },

/***/ 984473
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0444976fe354-image-1734595491154-b1c7318fd15b22ecb644ec4002d66f13.png");

/***/ },

/***/ 696
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/050d524eaf53-image-1712653549274-72b18b9d6bfa0fa9733be3b2ad525188.png");

/***/ },

/***/ 606416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0f965a421567-image-1734595518655-3fe21d716c6732a97d5508cf366dc991.png");

/***/ },

/***/ 428509
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1725e2ff4982-image-1734596025787-eed73e7c5ea40284a21778a98745f6de.png");

/***/ },

/***/ 341727
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1f53740cc3cd-image-1734595898541-2f864b63e049c9a87d6441d94b9603f5.png");

/***/ },

/***/ 406030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/23f6c72562a6-image-1712653436496-c4ddb495d6c04d345a9e02477d6ec83c.png");

/***/ },

/***/ 15712
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4982aec64dd6-image-1734595203830-96e80fcbf64df5529af88996d5e14679.png");

/***/ },

/***/ 195125
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5bcf4544dabf-image-1734596064066-e48bcf818f879155ec973d8999f072d8.png");

/***/ },

/***/ 124542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/797847d87983-image-1712818258855-e6995d4eedf35094f810b659d2f5eb03.png");

/***/ },

/***/ 956632
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/805aff756e0e-image-1712656669900-9ba246e09cb1d9e18a5a9914934d0d1e.png");

/***/ },

/***/ 436030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/974ca75eb8fe-image-1734595376651-e84c6299f4ae20bb88a715f6d39f890b.png");

/***/ },

/***/ 781864
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9bdc6a8e2778-image-1734595729279-20313336de4c963719d0f123773fbf69.png");

/***/ },

/***/ 249173
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9cda83377f0f-image-1734595691770-465149c0036fe3acdd8728158835fa36.png");

/***/ },

/***/ 5276
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c3a5551d5777-image-1712653461557-ca3326dc08e9de56fae38078a164c586.png");

/***/ },

/***/ 111223
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c56185cff578-image-1744797304260-28204afdcc676ce5019ff37f2b001714.png");

/***/ },

/***/ 999722
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c575dc0cb446-image-1712818777331-d2494888874d18ef62abd7b829bd6dec.png");

/***/ },

/***/ 781469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c6454938b3f9-image-1734595780158-71dc44dd8549d7b5f2b87c958f114cde.png");

/***/ },

/***/ 990831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/db082ce3d098-image-1712818286728-8e21d9cba0c0813d4a202e48e20ae1a6.png");

/***/ },

/***/ 590142
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e2a9d5626599-image-1734595578696-ed143a37afddec26836e3fd8e82f3b13.png");

/***/ },

/***/ 151322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f0bc6c134240-image-1734595412087-205ed4d7ebb8f7770557300b7cd0b859.png");

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