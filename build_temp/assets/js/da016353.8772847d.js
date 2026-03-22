"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[51262],{

/***/ 861861
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_create_a_gpu_vm_md_da0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-create-a-gpu-vm-md-da0.json
const site_docs_gpu_virtual_machine_create_a_gpu_vm_md_da0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/create-a-gpu-vm","title":"Create a GPU VM","description":"*","source":"@site/docs/gpu-virtual-machine/create-a-gpu-vm.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/create-a-gpu-vm","permalink":"/gpu-virtual-machine/create-a-gpu-vm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Create a GPU VM","title":"Create a GPU VM","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-gpu-vm","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Block Storage","permalink":"/gpu-virtual-machine/block-storage"},"next":{"title":"Create a Security Group","permalink":"/gpu-virtual-machine/create-a-security-group"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/create-a-gpu-vm.md


const frontMatter = {
	sidebar_label: 'Create a GPU VM',
	title: 'Create a GPU VM',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-gpu-vm',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Create a GPU VM';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 3
}, {
  "value": "Step 1: Open Instance Management",
  "id": "step-1-open-instance-management",
  "level": 3
}, {
  "value": "Step 2: Configure the Instance",
  "id": "step-2-configure-the-instance",
  "level": 3
}, {
  "value": "Step 3: Configure the Storage Disk",
  "id": "step-3-configure-the-storage-disk",
  "level": 3
}, {
  "value": "Step 4: Configure the Network Settings",
  "id": "step-4-configure-the-network-settings",
  "level": 3
}, {
  "value": "Step 5: Set Authentication Method",
  "id": "step-5-set-authentication-method",
  "level": 3
}, {
  "value": "Step 6: Advanced Settings",
  "id": "step-6-advanced-settings",
  "level": 3
}, {
  "value": "Backup Job",
  "id": "backup-job",
  "level": 4
}, {
  "value": "Tags",
  "id": "tags",
  "level": 4
}, {
  "value": "User Data (Cloud-init Script)",
  "id": "user-data-cloud-init-script",
  "level": 4
}, {
  "value": "Step 7: Create the Instance",
  "id": "step-7-create-the-instance",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "create-a-gpu-vm",
        children: "Create a GPU VM"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU Virtual Machines (VMs)"
      }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux-based"
      }), " virtual machines that run on top of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtualized hardware"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "high-end GPUs"
      }), ". Each VM you create is a new virtual server that you can use either standalone or as part of a larger, cloud-based infrastructure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-open-instance-management",
      children: "Step 1: Open Instance Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the side menu, go to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine > Instance Management"
      }), " , then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-configure-the-instance",
      children: "Step 2: Configure the Instance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-VM-1.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance Type:"
        }), " Select the type of instance. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU:"
        }), " Optimized for high-performance computing, machine learning, and other intensive tasks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Currently supported GPUs: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NVIDIA H100 SXM5"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NVIDIA H200 SXM"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disk Type:"
          }), " Only one disk type can be selected during GPU VM creation: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ephemeral Disk (NVMe) or Persistent Disk (Block Storage)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Image:"
          }), " You can use either the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "default Ubuntu base image"
          }), " or your ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "own custom image"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "OS:"
            }), " Currently supports ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ubuntu 22.04 GPU"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-VM-2.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom image:"
        }), " Upload your image under ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom Images"
        }), " (file type: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "QCOW"
        }), "). It will then appear in the image selection list."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-VM-3.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Type:"
        }), " Each GPU VM offers different configurations for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vCPU"
        }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RAM"
        }), " , and the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "number of GPUs attached"
        }), ". You can choose the configuration that best fits your workload requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-VM-4.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-configure-the-storage-disk",
      children: "Step 3: Configure the Storage Disk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-VM-5.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage Policy:"
          }), " Specifies the storage type used for the GPU VM."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["GPU VMs with ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ephemeral Disk (NVMe)"
              }), " support only ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "NVMe-SSD"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["GPU VMs with ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Persistent Disk"
              }), " support only ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Premium SSD"
              }), " , offering ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "IOPS between 3,000 and 10,000"
              }), " (depending on your service quota request)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Size:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Ephemeral Disk (NVMe):"
              }), " Fixed capacity per GPU instance (depends on the number of GPUs selected)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Persistent Disk:"
              }), " Scalable based on your storage requirements, starting from ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "100GB"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-configure-the-network-settings",
      children: "Step 4: Configure the Network Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-VM-6.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnet:"
          }), " Select the appropriate subnet to enable your VM to connect to internal and external resources."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced Network:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Private IP:"
              }), " Enter a private IP manually or let the system automatically assign one based on the selected subnet."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Floating IP:"
              }), " For ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ephemeral Disk NVMe"
              }), " , the Floating IP is only configured ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "after the VM is successfully created"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Security Group:"
              }), " Assign a security group to manage inbound and outbound traffic for the VM."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-set-authentication-method",
      children: "Step 5: Set Authentication Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose one of the following authentication methods:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SSH Key:"
          }), " The system automatically uses your latest SSH key (you can change it if needed)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password:"
          }), " Set a password and securely store it for console access."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-VM-7.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-6-advanced-settings",
      children: "Step 6: Advanced Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Create-VM-8.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "backup-job",
      children: "Backup Job"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only available for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VMs using Block Storage - Persistent Disk"
      }), ". You can schedule automatic backups and define their frequency and timing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Daily Full Backup:"
          }), " Performs a full backup every day."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Daily Incremental, Weekly Active Full:"
          }), " Performs daily incremental backups with a full backup once per week."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Daily Incremental, Monthly Active Full:"
          }), " Performs daily incremental backups with a full backup once per month."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Time:"
      }), " Set the specific time for the backup to run."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tags",
      children: "Tags"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assign existing tags to help manage and categorize your resources."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "user-data-cloud-init-script",
      children: "User Data (Cloud-init Script)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Data"
      }), " field allows you to add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cloud-init scripts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the VM starts, cloud-init reads metadata and automatically configures the system — including ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "users"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH keys"
      }), " , and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "network settings"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Cloud-init Script:"
      }), " With the provided script, the system will automatically create the user ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"testcloudinit\""
      }), " with password ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Abc123\""
      }), " . Another user, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"testcloudinit2\""
      }), " , with be created with the password ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"P@ssw0rd!\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# cloud-config\nusers:\n- name: testcloudinit\n  sudo: ALL=(ALL) NOPASSWD:ALL\n  lock_passwd: false\n  shell: /bin/bash\n  passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1\n\n- name: testcloudinit2\n  groups: sudo\n  lock_passwd: false\n  shell: /bin/bash\n  plain_text_passwd: P@ssw0rd!\n\n- hostname: testcloudinit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-7-create-the-instance",
      children: "Step 7: Create the Instance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Instance"
      }), " to deploy and start your GPU VM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once the instance is successfully created, you can view its details in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " dashboard."]
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