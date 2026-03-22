"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[13700],{

/***/ 954578
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_managed_gpu_cluster_gpu_workload_slurm_on_fpt_cloud_md_a27_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-managed-gpu-cluster-gpu-workload-slurm-on-fpt-cloud-md-a27.json
const site_docs_fpt_managed_gpu_cluster_gpu_workload_slurm_on_fpt_cloud_md_a27_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-managed-gpu-cluster/gpu-workload/slurm-on-fpt-cloud","title":"2. Managed GPU Cluster (Kubernetes)","description":"Slurm on FPTCloud Managed GPU cluster","source":"@site/docs/fpt-managed-gpu-cluster/gpu-workload/slurm-on-fpt-cloud.md","sourceDirName":"fpt-managed-gpu-cluster/gpu-workload","slug":"/fpt-managed-gpu-cluster/gpu-workload/slurm-on-fpt-cloud","permalink":"/fpt-managed-gpu-cluster/gpu-workload/slurm-on-fpt-cloud","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Slurm on fpt cloud","title":"2. Managed GPU Cluster (Kubernetes)","source":"https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=slurm-on-fpt-cloud","parent":"https://fptcloud.com/documents/fpt-managed-gpu-cluster","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Chuẩn bị môi trường","permalink":"/fpt-managed-gpu-cluster/gpu-workload/single-gpu-example"},"next":{"title":"Try example workload","permalink":"/fpt-managed-gpu-cluster/gpu-workload/try-example-workload"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-managed-gpu-cluster/gpu-workload/slurm-on-fpt-cloud.md


const frontMatter = {
	sidebar_label: 'Slurm on fpt cloud',
	title: '2. Managed GPU Cluster (Kubernetes)',
	source: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster/?doc=slurm-on-fpt-cloud',
	parent: 'https://fptcloud.com/documents/fpt-managed-gpu-cluster',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed GPU Cluster (Kubernetes)';

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
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed-gpu-cluster-kubernetes",
        children: "2. Managed GPU Cluster (Kubernetes)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slurm on FPTCloud Managed GPU cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Managed GPU Cluster"
      }), " dựa trên nền tảng mã nguồn mở K8s giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng container. FPT Managed GPU Cluster tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS cung cấp cho khách hàng môi trường tốt nhất để phát triển và triển khai ứng dụng trên Cloud."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Managed GPU Cluster"
      }), " là một mô hình cung cấp dịch vụ Managed GPU Cluster của FKE. Với MANAGED GPU CLUSTER, FPT Cloud quản trị toàn bộ thành phần control-planes, người sử dụng sẽ triển khai và quản trị các Worker Nodes. MANAGED GPU CLUSTER giúp người sử dụng tập trung vào việc triển khai ứng dụng mà không cần tốn nguồn lực vào việc quản trị K8s Cluster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➤ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Managed GPU Cluster"
      }), " là mô hình dịch vụ dựa trên nền tảng mã nguồn mở Kubernetes, giúp tự động hoá triển khai, nhân rộng và quản lý các ứng dụng đã được container hoá. Sản phẩm FPT Managed GPU Cluster ngoài tích hợp đầy đủ các thành phần: Container Orchestration, Storage, Networking, Security, PaaS thì còn cung cấp tài nguyên GPU, giúp hỗ trợ các thao tác tính toán phức tạp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Những điều cần lưu ý trước khi sử dụng Managed GPU Cluster?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "· Vị trí đặt Managed GPU Cluster:"
      }), " Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ truy cập đến máy chủ trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "· Số lượng các Nodes và cấu hình của từng Nodes cần sử dụng :"
      }), " Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định cho các tài nguyên Ram, CPU, Storage, IP… Vì vậy, khách hàng nên xác định số lượng tài nguyên cần sử dụng và giới hạn tối đa cần đáp ứng để FPT Cloud hỗ trợ bạn tốt nhất."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Giới thiệu Slurm và Slurm on Kubernetes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.1 Giới thiệu Slurm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slurm là một nền tảng mã nguồn mở mạnh mẽ dùng để quản lý tài nguyên cụm và lập lịch công việc (job). Nó được thiết kế nhằm tối ưu hiệu năng và hiệu quả cho các siêu máy tính và cụm tính toán lớn. Các thành phần chính của nó hoạt động cùng nhau để đảm bảo hệ thống đạt hiệu suất cao và tính linh hoạt. Hình sau đây minh họa cách thức hoạt động của Slurm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(345193)/* ["default"] */ .A) + "",
        width: "811",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "slurmctld"
      }), " : là trình nền điều khiển của Slurm. Được xem như “bộ não” của Slurm, slurmctld giám sát tài nguyên hệ thống, lập lịch job và quản lý trạng thái cụm. Để tăng tính tin cậy, bạn có thể cấu hình một slurmctld thứ cấp nhằm tránh gián đoạn dịch vụ nếu slurmctld chính gặp sự cố, đảm bảo hệ thống luôn sẵn sàng cao."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "slurmd"
      }), " : là trình nền nút của Slurm. slurmd được triển khai trên mỗi nút tính toán. Nó nhận lệnh từ slurmctld và quản lý job, bao gồm khởi chạy và thực thi job, báo cáo trạng thái job và chuẩn bị cho các lệnh job mới. slurmd đóng vai trò giao diện để giao tiếp trực tiếp với tài nguyên tính toán và là cơ sở để lập lịch job."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "slurmdbd"
      }), " : là trình nền cơ sở dữ liệu của Slurm. slurmdbd là thành phần tùy chọn nhưng rất quan trọng cho quản lý lâu dài và kiểm toán trong các cụm lớn, vì nó duy trì một cơ sở dữ liệu tập trung để lưu lịch sử job và thông tin kế toán. slurmdbd có thể tổng hợp dữ liệu từ nhiều cụm do Slurm quản lý, giúp đơn giản hóa và nâng cao hiệu quả quản lý dữ liệu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SlurmCLI:"
      }), " cung cấp các lệnh sau để hỗ trợ quản lý job và giám sát hệ thống:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "· scontrol: quản lý cụm và điều khiển cấu hình cụm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "· squeue: truy vấn trạng thái job trong hàng đợi."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "· srun: gửi và quản lý job."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "· sbatch: gửi job theo lô, giúp bạn lập lịch và quản lý tài nguyên tính toán."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "· sinfo: truy vấn trạng thái chung của cụm, bao gồm tình trạng sẵn sàng của các nút."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.2 Why Slurm K8s?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cả Slurm và Kubernetes đều có thể đóng vai trò là hệ thống quản lý tải công việc cho huấn luyện mô hình phân tán và tính toán hiệu năng cao (HPC) nói chung."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi hệ thống đều có điểm mạnh và điểm yếu riêng, và việc đánh đổi giữa chúng là đáng kể. Slurm cung cấp khả năng lập lịch tiên tiến, hiệu quả, kiểm soát phần cứng chi tiết và khả năng kế toán, nhưng lại thiếu tính phổ quát. Ngược lại, Kubernetes có thể được sử dụng cho nhiều mục đích khác ngoài huấn luyện (ví dụ: inferencing) và cung cấp khả năng tự động mở rộng và tự phục hồi tốt."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thật đáng tiếc là hiện chưa có cách nào để kết hợp lợi ích của cả hai giải pháp này. Và vì nhiều công ty công nghệ lớn sử dụng Kubernetes như một lớp hạ tầng mặc định mà không hỗ trợ hệ thống huấn luyện mô hình chuyên dụng, nên một số kỹ sư ML thậm chí không có sự lựa chọn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc sử dụng Slurm trên k8s cho phép chúng tôi tái sử dụng khả năng tự động mở rộng và tự phục hồi của Kubernetes trong Slurm, đồng thời triển khai một số tính năng độc đáo, mà vẫn giữ nguyên cách tương tác quen thuộc với hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.3 Giới thiệu Slurm on FPT Cloud Managed GPU/K8s cluster"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slurm Operator sử dụng tài nguyên tùy chỉnh SlurmCluster (CR) để định nghĩa các tập tin cấu hình cần thiết cho việc quản lý các cụm Slurm và giải quyết các vấn đề liên quan đến quản lý tầng điều khiển. Điều này giúp đơn giản hóa việc triển khai và bảo trì các cụm được quản lý bởi Slurm. Hình dưới đây mô tả kiến trúc của Slurm trên FPTCloud Managed GPU/k8s cluster. Quản trị viên cụm có thể triển khai và quản lý một cụm Slurm thông qua SlurmCluster. Slurm Operator sẽ tạo các thành phần điều khiển của Slurm trong cụm dựa trên SlurmCluster. Một tập tin cấu hình Slurm có thể được gắn vào thành phần điều khiển thông qua một volume chia sẻ hoặc một ConfigMap."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(290341)/* ["default"] */ .A) + "",
        width: "1634",
        height: "1284"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong mô hình triển khai Slurm on K8s, các thành phần của một cụm slurm như login node, worker node, ... được biểu diễn thành các pods trên K8s, đồng thời trong mô hình này, khái niệm shared-root volume được thực hiện, hiểu đơn giản thì chúng ta sẽ triển khai một shared filesystem, file system tương đương với file system của một OS, mọi job sau khi được chuyển đến worker node sẽ đều được triển khai trên môi trường shared root volume này. Điều này đảm bảo rằng mọi worker node sẽ luôn có cấu hình, các packages & trạng thái giống nhau mà không cần quản lý thủ công. Nói cách khác, khi bạn cài đặt packages trên một node, các packages đó sẽ tự động xuất hiện trên các node còn lại."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tất cả những gì bạn cần làm là định nghĩa về cụm slurm mong muốn của bạn tại Slurm cluster custom resource, Slurm operator sẽ thực hiện việc triển khai & quản lý cụm Slurm thay cho bạn về trạng thái bạn đã định nghĩa ở Slurm cluster CR."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Hướng dẫn cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2.1 Hướng dẫn triển khai cụm slurm trên k8s"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yêu cầu bắt buộc:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Cụm k8s có thể sử dụng tính năng dynamic provisioning volume & còn dư quota storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Ít nhất một storage class có thể cấp volume dạng Read Write Many."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Cài đặt Slurm Operator, GPU Operator, Network Operator tại phần cài đặt GPU software & chờ cho đến khi trạng thái các phần này ở ready ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(207672)/* ["default"] */ .A) + "",
        width: "1913",
        height: "925"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại cụm k8s, tạo sẵn các Persistent volume để chứa shared root space và dữ liệu của controller node."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chúng ta hãy chú ý về các volume trong mô hình triển khai Slurm on k8s:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545634)/* ["default"] */ .A) + "",
        width: "1100",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trong đó:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "· jail-pvc"
      }), " : mount vào worker node và login node, đóng vai trò như một shared sandbox, là môi trường các job được thực thi, cũng là môi trường user thao tác, dung lượng volume này ít nhất là 40Gi để chứa file system của một OS."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "· controller-spool-pvc"
      }), " : Lưu thông tin cấu hình về cụm, đặt tại controller node."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "jail-pvc.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: jail-pvc\n  namespace: fpt-hpc\nspec:\n  storageClassName: default\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 100Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "controller-spool-pvc.yaml (không cần tạo với slurm operator version >= 2.0.0)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: controller-spool-pvc\n  namespace: fpt-hpc\nspec:\n  storageClassName: default\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 10Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Các volume này đều là các volume bắt buộc phải có, chúng đều cần cung cấp cơ chế Read write many và tên của các PVC này phải giữ nguyên như trên."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Nhằm thuận tiện để triển khai, chúng tôi đã sử dụng cơ chế dynamic provisioning volume trên sản phẩn FPTcloud managed k8s."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Với môi trường production, chúng tôi khuyến nghị việc mount root volume từ một phân vùng tĩnh thuộc file server, để thuận tiện cho việc migrate & bảo trì cụm Slurm."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : download Slurm cluster CR helm chart + define cấu hình mong muốn"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "helm repo add xplat-fke https://registry.fke.fptcloud.com/chartrepo/xplat-fke \nhelm repo update helm repo list \nhelm search repo slurm \nhelm pull xplat-fke/helm-slurm-cluster --version 1.14.10 --untar=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: chỉnh version của slurm-cluster đúng với version của Slurm operator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tìm hiểu sâu hơn về các tham số của một cụm slurm, chúng tôi khuyến khích bạn đọc phần 3: mô tả các tham số cụm Slurm."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd helm-slurm-cluster/\n\nvi values.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại file values.yaml của folder vừa tải, bạn cần chỉnh một số trường quan trọng như:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNodes.worker.size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "số lượng worker nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNodes.worker.size.spool.volumeClaimTemplateSpec.storageClassName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "storage class của persistent volume dùng để lưu trạng thái worker nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNode.login.sshRootPublicKeys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "danh sách các public key của user root trong cụm Slurm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SlurmNode.accounting.mariadbOperator.storage.volumeClaimTemplate.storageClassNam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "storage class của persistent volume dùng để lưu dữ liệu tại slurmdbd node"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi chỉnh cấu hình cụm theo nhu cầu, chạy lệnh sau"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "helm install fpt-hpc ./ -n fpt-hpc\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Chờ cho đến khi toàn bộ pod Slurm ở trạng thái running Quá trình này mất khoảng 20 phút ở lần đầu tiên cài slurm cluster trên cụm k8s, bao gồm 2 phase, phase 1 chạy job setup và phase 2 cài đặt các pod slurm components"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi toàn bộ các component ready, tìm IP public của login node bằng lệnh"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl get svc -n fpt-hpc | grep login\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện ssh vào head node cụm Slurm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh root@IP_login_svc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu dùng nodeshell thì"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "chroot /mnt/jail\nsudo -i \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chạy kiểm tra:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "srun --nodes=2 --gres=gpu:1 nvidia-smi –L \nsalloc --nodes=1 --ntasks=1 --mem=4G --time=00:20:00 --gres=gpu:1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2.2 Chạy job mẫu trên cụm Slurm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi login thành công vào cụm Slurm, bạn có thể kiểm tra hoạt động của cụm slurm bằng việc train model mingpt theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : clone pytorch/example repository"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mkdir /shared \ncd /shared \ngit clone https://github.com/pytorch/examples\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : chuyển hướng đến folder minGPT-ddp & cài đặt các gói cần thiết"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd examples/distributed/minGPT-ddp \npip3 install -r requirements.txt \npip3 install numpy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhờ cơ chế shared root, chúng ta chỉ cần chạy lệnh trên một lần, các package này sẽ tự sync trên toàn bộ các node worker khác."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: trong môi trường production, chúng tôi khuyến nghị việc dùng conda evironment/ container để tạo môi trường train thay vì cài trực tiếp các package ở môi trường global như trên."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : edit file slurm script"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vi mingpt/slurm/sbatch_run.sbatch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "chú ý: chỉnh path của file main.py trong file sbatch_run.sh về path của file main.py trong folder mingpt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : chạy mẫu slurm job"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sbatch mingpt/slurm/sbatch_run.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Kiểm tra"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "squeue \nscontrol show job job_id\ncat log.out\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.Mô tả các tham số trong Custom resource của Slurm cluster"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại phần 2 của hướng dẫn chạy Slurm trên K8s, chúng tôi đã hướng dẫn bạn chỉnh các tham số quan trọng nhất. Tại phần này, chúng ta sẽ đi vào tìm hiểu thêm về các tham số/thuộc tính được định nghĩa cho một Slurm cluster, bạn cũng có thể đọc phần comment tại file values.yaml của slurm cluster custom resource đã tải ở phần 2 để biết thêm thông tin về các trường."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Thuộc tính"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "giá trị mẫu"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clusterName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"fpt-hpc\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tên cụm (lưu ý không đổi)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k8sNodeFilters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chia cụm k8s ra làm hai danh sách: các node GPU (deploy slurm worker) và các node no-gpu để deploy các thành phần khác, trong trường hợp cụm chỉ có node GPU, hai danh sách node này có thể giống nhau."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumeSources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "volumeSources:"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- name: controller-spool"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "persistentVolumeClaim:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "claimName: \"controller-spool-pvc\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readOnly: false"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- name: jail"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "persistentVolumeClaim:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "claimName: \"jail-pvc\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readOnly: false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "định nghĩa các Persistent volume claim sẽ đường dùng bởi các container đại diện các component (worker, login, controller nodes,...) thuộc cụm Slurm"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "periodicChecks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job chạy định kỳ để kiểm tra tình trạng của một node. Nếu node đó chứa GPU gặp vấn đề, drain node đó."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Định nghĩa về số lượng, cấu hình của các node thành phần trong một cụm slurm (login node, worker node, ...)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNodes.accounting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enabled: true"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mariadbOperator:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled: true"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"1000m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"1Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"5Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "replicas: 1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "replication: {}"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "storage:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeral: false"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumeClaimTemplate:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessModes:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- ReadWriteOnce"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requests:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "storage: 10Gi"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "storageClassName: xplat-nfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cấu hình accounting node, tại đây chúng tôi sử dụng mariadb operator để tạo database, bạn cũng có thể sử dụng database ngoài (đọc thêm tại phần values.yaml)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNodes.controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size: 1"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k8sNodeFilterName: \"no-gpu\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmctld:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "port: 6817"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"1000m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"3Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"20Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "munge:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"1000m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"1Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"5Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumes:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spool:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumeSourceName: \"controller-spool\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jail:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumeSourceName: \"jail\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cấu hình controller node, với 1 controller node + mount 2 volume spool & jail shared root space) vào node nà"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNodes.worker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size: 8"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k8sNodeFilterName: \"gpu\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cgroupVersion: v2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmd:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "port: 6818"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"110000m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"1220Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"55Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gpu: 8"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rdma: 1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "munge:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"2000m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"4Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"5Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumes:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spool:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumeClaimTemplateSpec:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "storageClassName: \"xplat-nfs\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessModes: [\"ReadWriteOnce\"]"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requests:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "storage: \"120Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jail:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumeSourceName: \"jail\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cấu hình worker nodes, với 8 worker nodes, mỗi node 8 GPUs + mount volume jail(shared root space) vào node này."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNodes.login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "login:"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size: 2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k8sNodeFilterName: \"no-gpu\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sshd:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "port: 22"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"3000m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"9Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"30Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sshRootPublicKeys:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["- \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHke7B5+kGXx/Dwr76NI5KxfAAEkqcxbh6/8SV7tnpUP ", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:someorganize@example.com",
              children: "someorganize@example.com"
            }), "\""]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sshdServiceLoadBalancerIP: \"\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sshdServiceNodePort: 30022"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "munge:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"500m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"500Mi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"5Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumes:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jail:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumeSourceName: \"jail\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cấu hình worker nodes, với 2 login nodes, expose sshd service bằng load-balancer service type trong k8s, sử dụng publickey định nghĩa tại sshRootPublicKeys cho root user và mount các volume tương tự controller node & worker node."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slurmNodes.exporter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exporter:"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled: true"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size: 1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k8sNodeFilterName: \"no-gpu\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exporter:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"250m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"256Mi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"500Mi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "munge:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resources:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cpu: \"1000m\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory: \"1Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ephemeralStorage: \"5Gi\""
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumes:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jail:"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "volumeSourceName: \"jail\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cài đặt node exporter phục vụ monitoring."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.Các usecase thường gặp."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.1 Thêm user/ login"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thêm user"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thêm ssh key cho root, bạn đơn giản chỉ cần edit slurm cluster CR:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl edit SlurmCluster  fpt-hpc -n fpt-hpc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại phần cấu hình login node, chuyển hướng đến thuộc tính sshRootPublicKeys, thêm public key mong muốn của bạn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thêm một regular user, bạn làm tương tự việc thêm user cho một linux host"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo adduser user_name\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chỉnh sửa việc login"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mặc định, chúng tôi expose login node qua một Load Balancer public, điều này có thể không phù hợp với một số yêu cầu. Do vậy, bạn có thể chuyển type của LB này về private, dùng cơ chế port-forward để access vào cụm slurm, hoặc tự customize theo ý bạn tại portal + node LB của chúng tôi."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.2 Scale up + down worker nodes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để chỉnh sửa số lượng worker nodes nói riêng và số lượng các nodes thuộc loại khác nói chung, chúng ta đơn giản chỉ cần edit lại slurm cluster CR:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl edit SlurmCluster  fpt-hpc -n fpt-hpc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại phần cấu hình worker nodes, chuyển hướng tới mục “size\" và edit số lượng worker node theo mong muốn"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-Khi scale up số lượng worker nodes, node mới sẽ được tự động thêm vào danh sách worker nodes tại slurm controller node và sẵn sàng để chạy job."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-Khi scale down nodes, bạn cần xóa node thủ công tại slurm controller bằng lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "scontrol delete nodeName=node_name_to_delete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-Danh sách nodes trong một cluster luôn là worker-[0, (size - 1)]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.3 Migrate Slurm cluster sang k8s cluster khác"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhờ sự linh hoạt của k8s và network file storage, chúng ta có thể dễ dàng chuyển slurm cluster từ một cụm k8s này sang cụm k8s khác, việc phải làm là mounting & tạo lại jail-pvc trên cụm slurm k8s mới và thực hiện lại các bước tạo slurm k8s."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.4 Mounting external volumes vào cụm slurm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để mount một volume vào slurm cluster, bạn cần tạo volume đó trước, sau đó triển khai volume đó dưới dạng PV & PVC tại K8s. Ví dụ sau sử dụng dynamic provisioning để tạo PV/PVC này (trong môi trường production chúng tôi khuyến nghị sử dụng static provisioning volume để đảm bảo an toàn dữ liệu)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : tạo PVC"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: jail-submount-mlperf-sd-pvc\nspec:\n  storageClassName: default\n  accessModes:\n    - ReadWriteMany\n  resources:\n     requests:\n        storage: 100Gi\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : khai báo volume này tại slurm cluster"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edit trường volumeSource tại slurm cluster CR"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl edit SlurmCluster  fpt-hpc -n fpt-hpc\n\n\nvolumeSources:\n  - name: controller-spool\n    persistentVolumeClaim:\n      claimName: \"controller-spool-pvc\"\n      readOnly: false\n  - name: jail\n    persistentVolumeClaim:\n      claimName: \"jail-pvc\"\n      readOnly: false\n  - name: mlperf-sd\n    persistentVolumeClaim:\n      claimName: \"jail-submount-mlperf-sd-pvc\"\n      readOnly: false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : mount các volume trên vào các node login và worker trong cụm slurm"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại login node:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "volumes:\n      jail:\n        volumeSourceName: \"jail\"\n      jailSubMounts:\n        - name: \"mlcommons-sd-bench-data\"\n          mountPath: \"/mnt/data-hps\"\n          volumeSourceName: \"mlperf-sd\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại worker node:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "volumes:\n      spool:\n        volumeClaimTemplateSpec:\n          storageClassName: \"xplat-nfs\"\n          accessModes: [\"ReadWriteOnce\"]\n          resources:\n            requests:\n              storage: \"120Gi\"\n      jail:\n        volumeSourceName: \"jail\"\n      jailSubMounts:\n        - name: \"mlcommons-sd-bench-data\"\n          mountPath: \"/mnt/data-hps\"\n          volumeSourceName: \"mlperf-sd\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: mount path cần giống nhau trên các worker node và login node"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.5 Sử dụng docker"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong môi trường HPC, các container runtime như Apptainer, Enroot&Pyxis; được ưu tiên sử dụng hơn Docker. Tuy nhiên, các container runtime này không thuận tiện để sử dụng với những công việc build, push image, thậm chí run (không recommend docker slurm) với những user đã quen sử dụng docker."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để hỗ trợ những user này, chúng tôi đã cài đặt docker tại shared root volume của cụm slurm, như vậy mọi node trong cụm slurm đều có thể sử dụng docker. Tuy nhiên, việc này yêu cầu job sử dụng toàn bộ resources của node do các job khởi chạy bằng docker sẽ khôn thể bị giới hạn tài nguyên như apptainer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khuyến nghị user luôn thêm -N & --exclusive để cấp toàn bộ tài nguyên node cho job chạy bằng docker."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4.6 Sử dụng ssh"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với những phiên bản slurm operator trước đây, user chỉ có thể truy cập worker node bằng việc shell trực tiếp vào node worker thông qua kubectl."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Từ version 2.0.0, slurm operator hỗ trợ việc ssh trên các worker node, thay vì việc phải dùng Kubernetes để shell vào worker nodes. User của các worker nodes đồng nhất với login nodes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với login nodes, mặc định khi ssh vào IP của loadbalancer, loadbalancer sẽ route ssh session đến một login node ngẫu nhiên."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn sử dụng các tool ssh như Tmux, bạn sẽ luôn muốn ssh vào một node cố định. Để luôn có thể ssh vào một node xác định, hãy sử dụng lệnh sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh -J username@public_endpoint username@login-number -i path_to_private_key\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./file-storage-high-performance",
        children: " Previous Hướng dẫn tích hợp File Storage – High Performance "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./vgpu-for-container",
        children: " Next VGPU for container  "
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

/***/ 345193
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/00c51d67dcc4-Picture1-1-59c22be94f0f00f6f4016d27cbcf2cc8.png");

/***/ },

/***/ 207672
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/863f4c91673d-Picture3-2-9a96162563d63f78278d2eaba97cf961.png");

/***/ },

/***/ 290341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d68031fc1434-Picture2-1-c7b5b889a8c447a83e23054f5372d7de.png");

/***/ },

/***/ 545634
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f1c64bd53fe5-Picture4-1-16e94316b5d1dcaf58747ff37400d812.png");

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