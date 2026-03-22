"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[79389],{

/***/ 666433
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_block_storage_md_dea_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-block-storage-md-dea.json
const site_docs_gpu_virtual_machine_block_storage_md_dea_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/block-storage","title":"Block Storage","description":"*","source":"@site/docs/gpu-virtual-machine/block-storage.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/block-storage","permalink":"/gpu-virtual-machine/block-storage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Block Storage","title":"Block Storage","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=block-storage","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Access to GPU VM","permalink":"/gpu-virtual-machine/access-to-servers"},"next":{"title":"Create a GPU VM","permalink":"/gpu-virtual-machine/create-a-gpu-vm"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/block-storage.md


const frontMatter = {
	sidebar_label: 'Block Storage',
	title: 'Block Storage',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=block-storage',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Block Storage';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 3
}, {
  "value": "Create Storage Disks",
  "id": "create-storage-disks",
  "level": 3
}, {
  "value": "Option 1: Create an External disk from a Virtual machine detail page",
  "id": "option-1-create-an-external-disk-from-a-virtual-machine-detail-page",
  "level": 4
}, {
  "value": "Option 2: Create an External disk from the Storage disks page",
  "id": "option-2-create-an-external-disk-from-the-storage-disks-page",
  "level": 4
}, {
  "value": "Attach External Disks to GPU VMs",
  "id": "attach-external-disks-to-gpu-vms",
  "level": 3
}, {
  "value": "Detach External Disks from GPU VMs",
  "id": "detach-external-disks-from-gpu-vms",
  "level": 3
}, {
  "value": "Edit Storage Disks",
  "id": "edit-storage-disks",
  "level": 3
}, {
  "value": "Create Volume Snapshots",
  "id": "create-volume-snapshots",
  "level": 3
}, {
  "value": "Delete Storage Disk",
  "id": "delete-storage-disk",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
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
        id: "block-storage",
        children: "Block Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Block Storage"
      }), " is a service that provides block-based storage volumes for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU Virtual Machines (VMs)"
      }), ". Each storage disk behaves like a physical hard drive when attached to a VM, supporting fast, consistent, and high-throughput data access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compared to local NVMe storage, Block storage offers greater durability, scalability, and persistence, ensuring that data remains available even when a VM is deleted or stopped."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are two types of Block Storage disks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Root disk:"
          }), " serves as the primary system disk of a VM, containing the OS and essential system files required for boot and runtime. It is automatically created along with the VM during provisioning."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "External disk:"
          }), " is an independent data disk used to expand a VM's storage capacity. External disks can be detached from one VM and reattached to another, allowing flexible data reuse across workloads."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To access this service, go to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Main Menu > Compute Engine > Storage disks"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["From this page, users can view a list of all Storage Disks created within the VPC, along with key details such as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tags"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage type"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage policy"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Size"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created At"
      }), " (creation date), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attached"
      }), " (associated virtual machine)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-storage-disks",
      children: "Create Storage Disks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To create a Storage disk in FPT Cloud, first identify the type of disk you need:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Root disk"
          }), " is automatically created along with the virtual machine. References: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=block-storage",
            children: "Create a GPU VM"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "External disk"
          }), " can be created independently and attached to a virtual machine later."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can create an External disk using either of the following methods:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "option-1-create-an-external-disk-from-a-virtual-machine-detail-page",
      children: "Option 1: Create an External disk from a Virtual machine detail page"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Access the Storage section:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["From the main menu, go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compute Engine > Instance management"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the virtual machine you want to add external storage to from the list, then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage tab"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create disk"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-1.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Enter the required configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage policy:"
          }), " Select the storage type or performance tier."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Size:"
          }), " Define the storage capacity."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Create the disk:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create disk"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system will initialize the new disk and notify you upon completion."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once successful, the new External disk will appear in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage"
          }), " tab."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "option-2-create-an-external-disk-from-the-storage-disks-page",
      children: "Option 2: Create an External disk from the Storage disks page"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Access the Storage disks page:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["From the main menu, go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compute Engine > Storage disks"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create storage"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Enter the required configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name:"
          }), " Specify the storage disk name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type:"
          }), " Choose ", (0,jsx_runtime.jsx)(_components.em, {
            children: "General"
          }), " to create a new empty disk or ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Snapshot"
          }), " to restore from an existing snapshot."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage policy:"
          }), " Select the storage type or performance tier."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Size:"
          }), " Define the storage capacity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Applied instance (optional):"
          }), " Choose a VM to attach the disk to (can be done later)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-4.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Create the disk:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create storage disk"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system will initialize the new disk and notify you upon completion."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once successful, the new External disk will appear in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage disks"
          }), " page."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attach-external-disks-to-gpu-vms",
      children: "Attach External Disks to GPU VMs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After creation, if an External disk is not yet attached to any virtual machine, you can manually attach it to enable usage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Storage disks are compatible with all OSs supported on FPT Cloud."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Select the External disk you want to attach. Then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions > Attach"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-5.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Choose the target virtual machine from the popup window and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attach storage disk"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-6.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Each Storage disk can only be attached to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "one virtual machine"
          }), " at a time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Windows virtual machines"
          }), " , additional configuration steps are required before the new disk becomes usable."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detach-external-disks-from-gpu-vms",
      children: "Detach External Disks from GPU VMs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can detach an External disk from a virtual machine when it is no longer needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After detachment, all data on the disk remains intact, and the disk can be reattached to another virtual machine at any time."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Select the External disk you want to detach from the list, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions > Detach"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-7.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Review the confirmation popup, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detach"
      }), " to confirm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-8.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edit-storage-disks",
      children: "Edit Storage Disks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can edit the details of a Storage disk when it is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not attached"
      }), " to any virtual machine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Select the Storage disk you want to modify from the list, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions > Edit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-9.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " popup, update the necessary information, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit root disk / Edit storage disk"
      }), " to save changes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name:"
          }), " the name of the storage disk."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage policy:"
          }), " the storage type or performance tier."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Size:"
          }), " the capacity of the storage disk."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: The new size must be greater than the current size — reducing disk size is not supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-10.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-volume-snapshots",
      children: "Create Volume Snapshots"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Select the Storage disk you want to back up from the list, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions > Create volume snapshots"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-11.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create volume snapshot"
      }), " pop-up, update the necessary information, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create volume snapshot"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Snapshot name:"
          }), " the name for the snapshot."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add tag (optional):"
          }), " tags for the snapshot."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The snapshot will contain data from the selected storage disk."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Creating a snapshot from an attached volume may cause data inconsistency in some cases. It’s recommended to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "detach the disk or stop the VM"
          }), " before taking a snapshot for critical workloads."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Snapshots are stored in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Snapshot section"
          }), " and can be used to create new disks or restore data later."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-12.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-storage-disk",
      children: "Delete Storage Disk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Storage disk can be automatically or manually deleted depending on its type and attachment status."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Root disk:"
          }), " is automatically deleted together with the virtual machine it is attached to. No manual action is required."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "External disk:"
          }), " is not deleted when the virtual machine it is attached to is removed. The disk remains available in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage disks"
          }), " and can be reattached to another VM as needed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also manually delete an External disk at any time to avoid additional storage costs by following these steps:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Only ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "detached External disks"
          }), " (not attached to any instance) can be deleted."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once deleted, all data on the disk ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cannot be recovered"
          }), ". Please proceed with caution."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Select the External disk you want to delete from the list, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions > Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-13.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " Review the warning message in the confirmation pop-up and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete storage disk"
      }), " to confirm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-14.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The External disk will be permanently removed from your VPC."
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