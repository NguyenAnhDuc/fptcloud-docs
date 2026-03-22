"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[76431],{

/***/ 769890
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_serving_create_a_new_model_serving_deployment_md_d95_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-serving-create-a-new-model-serving-deployment-md-d95.json
const site_docs_model_serving_create_a_new_model_serving_deployment_md_d95_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-serving/create-a-new-model-serving-deployment","title":"Create a New Model Serving Deployment","description":"*","source":"@site/docs/model-serving/create-a-new-model-serving-deployment.md","sourceDirName":"model-serving","slug":"/model-serving/create-a-new-model-serving-deployment","permalink":"/model-serving/create-a-new-model-serving-deployment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Create a New Model Serving Deployment","title":"Create a New Model Serving Deployment","source":"https://fptcloud.com/en/documents/model-serving/?doc=create-a-new-model-serving-deployment","parent":"https://fptcloud.com/en/documents/model-serving","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"About FPT Smart Cloud","permalink":"/model-serving/about-fci"},"next":{"title":"Delete a deployment","permalink":"/model-serving/delete-a-deployment"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-serving/create-a-new-model-serving-deployment.md


const frontMatter = {
	sidebar_label: 'Create a New Model Serving Deployment',
	title: 'Create a New Model Serving Deployment',
	source: 'https://fptcloud.com/en/documents/model-serving/?doc=create-a-new-model-serving-deployment',
	parent: 'https://fptcloud.com/en/documents/model-serving',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Create a New Model Serving Deployment';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h1: "h1",
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
        id: "create-a-new-model-serving-deployment",
        children: "Create a New Model Serving Deployment"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), " : Select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Platform"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Serving"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployment"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Deployment."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), " : Enter the Model Settings information, then click Next"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Model Information"
          }), " : AI deployment information. Select Model Type:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Model included in Image: AI Model included in Container Image"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Model not included in Image: AI Model not included in Container Image"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "NVIDIA NGC Catalog: AI Model using NVIDIA NGC technology"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If Model Type is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Model included in Image"
          }), " , select Model Source:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Model Source"
              }), " : Model selection source. Select Model Source:"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Model Catalog"
                  }), " : Centralized repository of public models, shared for users to use."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Model Name: Name of the model selected on the Model Catalog."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Model Version: Version of the model selected on the Model Catalog."
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Model Token: Token authenticated with the Model Catalog for deployment ", (0,jsx_runtime.jsxs)(_components.em, {
                      children: ["(Create token by: on the home page interface, select", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Token"
                      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Create"
                      }), ")"]
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Private Model"
                  }), " : Private repository of users, can be used internally within the organization."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Model Name: Name of the model selected on Private."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Model Version: Version of the model selected on Private Model."
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Model Token: Token authenticated with Private Model to deploy (Create token by: on the home page interface, select ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Token"
                    }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Create"
                    }), ")"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Custom Model"
                  }), " : Custom model on the Internet, currently only supporting Hugging Face models."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "Model URL: Path to the custom model"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "Model Token: User authentication token on the platform of the selected Custom Model (e.g., Hugging Face)"
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you select Model Type as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model included in Image"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model not Included in Image"
      }), " , select Image Information:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Information"
        }), " : Container Image deployment information. Enter Image information:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Image Source: Select Image type ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Public"
            }), " (no need to enter user/password) or Private (need to enter user/password)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Image Registry: Link to the container image storage location."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Image Tag: Container image version"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/12/model-included-in-image-or-model-not-included-in-image.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If Model Type is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NVIDIA NIM – NGC Catalog"
      }), " , select deployment information:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIM Model"
        }), " : Select the NIM Model to deploy. Refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.nvidia.com/nim/large-language-models/latest/support-matrix.html",
          children: "Support matrix"
        }), " to select the correct Model compatible with the deployment infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIM Helm Chart"
        }), " : Select the appropriate Helm Chart to deploy the Model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NCG Personal Key"
        }), " : The personal key to authenticate the user with NGC Catalog.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Refer to the", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.nvidia.com/ngc/gpu-cloud/ngc-catalog-user-guide/index.html#generating-personal-api-key",
            children: "NGC Catalog User Guide"
          }), " to generate the personal key.)"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/12/Nim.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Enter the Deployment Settings information, then click Next."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment Information:"
        }), " Information about the Deployment\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Serving Name: The name of the deployment to be served."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Choose Cluster : Select the K8S cluster to serve from the list of K8S clusters in this VPC."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Instance Replica: The number of processing units in this deployment."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Resource Type: Information about resource configuration. There are two types of resources:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Flavor: Pre-configured selection for CPU/RAM/DISK/GPU"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Custom: Custom configuration for CPU/RAM/DISK/GPU according to needs."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/12/6.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Advance Settings:"
            })
          }), " Enter advanced configurations for Deployment. Click See More to configure."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsxs)(_components.strong, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: "Deployment Strategy"
                }), " :"]
              }), " Choose a deployment strategy for K8S. Available strategies include:"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Recreate:"
                  })
                }), " Recreate instances when changes are made (downtime will occur)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Rolling:"
                  })
                }), " Gradually replace instances during updates (no downtime), but requires additional resources equivalent to one instance."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Startup Command:"
                })
              }), " Configure the startup command for instances"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Startup Command:"
                  })
                }), " The command executed when the instance starts"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Arguments:"
                  })
                }), " Parameters passed to the startup command"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Environment Variable:"
                })
              }), " Define environment variables for the instance"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Key:"
                  })
                }), " The name of the environment variable"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Value:"
                  })
                }), " The value assigned to the environment variable"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Nodes Selector:"
                })
              }), " Select specific worker nodes/worker groups for deployment"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Key:"
                  })
                }), " The label key assigned to the node"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Value:"
                  })
                }), " The label value assigned to the node"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Tags:"
                })
              }), " Assign tags to the Deployment"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Key:"
                  })
                }), " The label key assigned to the Deployment"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Value:"
                  })
                }), " The label value assigned to the Deployment"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/12/7.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4"
      }), " : Enter configuration details for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traffic Settings"
      }), " , then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic Information"
        }), " : Configure settings for the Deployment's external connection\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Services Type"
              })
            }), " : The type of service for the external connection\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Load Balancer: Use load balancing"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Cluster IP: Use internal communication within the Kubernetes Cluster"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Ingress: Use the Ingress application to manage connection flows"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Traffic Type"
              })
            }), " : Specify the connection type: public or private"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Port:"
              })
            }), " The external connection port"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/12/8.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Review the entered information and click Confirm to create the Deployment cluster"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/12/9.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./initial-set-up",
        children: " Previous Initial Setup "
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