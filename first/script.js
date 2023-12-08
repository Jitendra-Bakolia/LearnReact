



//~ ====================================================================================================

// const element = (
//     <div>
//         <h1 className="heading">This is just testing</h1>
//         <p>This is just testing</p>
//         <p className="thirdPair">This is just testing</p>
//         <p>This is just testing<span>Area</span></p>
//     </div>
// )

// console.log(`🙈 🙉 🙊 ~ file: script.js:11 ~ element : `, element)

/**
 * And This console retutns
 * 
 * {
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
        "children": [
            {
                "type": "h1",
                "key": null,
                "ref": null,
                "props": {
                    "className": "heading",
                    "children": "This is just testing"
                },
                "_owner": null,
                "_store": {}
            },
            {
                "type": "p",
                "key": null,
                "ref": null,
                "props": {
                    "children": "This is just testing"
                },
                "_owner": null,
                "_store": {}
            },
            {
                "type": "p",
                "key": null,
                "ref": null,
                "props": {
                    "className": "thirdPair",
                    "children": "This is just testing"
                },
                "_owner": null,
                "_store": {}
            },
            {
                "type": "p",
                "key": null,
                "ref": null,
                "props": {
                    "children": [
                        "This is just testing",
                        {
                            "type": "span",
                            "key": null,
                            "ref": null,
                            "props": {
                                "children": "Area"
                            },
                            "_owner": null,
                            "_store": {}
                        }
                    ]
                },
                "_owner": null,
                "_store": {}
            }
        ]
    },
    "_owner": null,
    "_store": {}
}
 */

// ReactDOM.render(element, document.getElementById("root"));

//~ ====================================================================================================


// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "heading";

// console.log(`🙈 🙉 🙊 ~ file: script.js:5 ~ h1 : `, h1)
// /**
//  * This console returns
//  *
//  * <h1 class="heading">This is an imperative way to program</h1>
//  */

// const element = <h1 className="heading">This is just testing</h1>
// console.log(`🙈 🙉 🙊 ~ file: script.js:9 ~ element : `, element)

// /** 
//  * And This console retutns
//  * {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "heading",
//         "children": "This is just testing"
//     },
//     "_owner": null,
//     "_store": {}
// }
//  */

// ReactDOM.render(
//     element,
//     document.getElementById("root")
// );

//~ ====================================================================================================

// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "heading";

// document.querySelector("#root").appendChild(h1);

//~ ====================================================================================================

// function NavBar() {
//     return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                     </a>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <li><a className="dropdown-item" href="#">Action</a></li>
        //                         <li><a className="dropdown-item" href="#">Another action</a></li>
        //                         <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //                 </li>
        //             </ul>
        //             <form className="d-flex">
        //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                     <button className="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>
//     )
// }

// ReactDOM.render(
//     <div>
//         <NavBar />
//     </div>,
//     document.getElementById("root")
// )

//~ ====================================================================================================

// ReactDOM.render(
//     <ul>
//         <li>First</li>
//         <li>Second</li>
//         <li>Third</li>
//     </ul>,
//     document.querySelector("#root")
// )


//~ ====================================================================================================
// ReactDOM.render(<h1>DOM Manulation</h1>, document.getElementById("root"));