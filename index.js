
// The values checkboxes can be obtained through IDs in following format:
// my share: ms + item_id
// voice share: vs + item_id
// Example: For 'My Share" in first item of list1: document.getElementById("msa").checked

// Hard coded dummy arrays
const array1 = [
    {
        Item_id: "a",
        Heading: true,
        Item_name: "List one",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "a1",
        Heading: false,
        Item_name: "Item1",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "a2",
        Heading: false,
        Item_name: "Item2",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "a3",
        Heading: false,
        Item_name: "Item3",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "a4",
        Heading: false,
        Item_name: "Item4",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    }
];

const array2 = [
    {
        Item_id: "b",
        Heading: true,
        Item_name: "List two",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "b5",
        Heading: false,
        Item_name: "Item1",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "b6",
        Heading: false,
        Item_name: "Item2",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "b7",
        Heading: false,
        Item_name: "Item3",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "b8",
        Heading: false,
        Item_name: "Item4",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    }
];
const array3 = [
    {
        Item_id: "c",
        Heading: true,
        Item_name: "List three",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "c9",
        Heading: false,
        Item_name: "Item1",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "c10",
        Heading: false,
        Item_name: "Item2",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "c11",
        Heading: false,
        Item_name: "Item3",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "c12",
        Heading: false,
        Item_name: "Item4",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    }
];

const array4 = [
    {
        Item_id: "d",
        Heading: true,
        Item_name: "List four",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "c13",
        Heading: false,
        Item_name: "Item1",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "c14",
        Heading: false,
        Item_name: "Item2",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "c15",
        Heading: false,
        Item_name: "Item3",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    },
    {
        Item_id: "c16",
        Heading: false,
        Item_name: "Item4",
        Sub_item_names: ["Sub_item1", "Sub_item2", "Sub_item3"]
    }
];

// Open the subitem dropdown menu
function toggleDropdown(dropdownID) {
    document.getElementById(String(dropdownID.id)).classList.toggle("show");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show') && openDropdown.id != dropdownID.id) {
            openDropdown.classList.remove('show');
        }
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Function to insert sub-items in the dropdown menu of each item in the list
function populateSubItems(subItemsList) {
    var sList = '';
    for (let subItem in subItemsList) {
        sList += `<span onclick="dropDownItemFunction()">${subItemsList[subItem]}</span>`;
    }
    return sList;
}

// Function to insert arrays into div elements
function populateList(sourceArray, targetDivNumber) {
    var listID = `list${targetDivNumber}`;
    var a = document.getElementById(listID);
    for (let item in sourceArray) {
        if (sourceArray[item].Heading) {
            a.insertAdjacentHTML("beforeend",
                `<div class="item list-header ">
                <div><input type="checkbox" id="ms${sourceArray[item].Item_id}"><input type="checkbox" id="vs${sourceArray[item].Item_id}"></div>
                <div class="item-count list-count">52</div>
                <div class="item-name list-title">${sourceArray[item].Item_name}</div>
                <div class="dropdown-btn" onclick="toggleDropdown(${sourceArray[item].Item_id})">▼</div>
                <div class="dropdown-content" id="${sourceArray[item].Item_id}">
                    ${populateSubItems(sourceArray[item].Sub_item_names)}
                </div>
            </div>` );
        }
        else {
            a.insertAdjacentHTML("beforeend",
                `<div class="item">
                <div><input type="checkbox" id="ms${sourceArray[item].Item_id}"><input type="checkbox" id="vs${sourceArray[item].Item_id}"></div>
                <div class="item-count">52</div>
                <div class="item-name">${sourceArray[item].Item_name}</div>
                <div class="dropdown-btn" onclick="toggleDropdown(${sourceArray[item].Item_id})">▼</div>
                <div class="dropdown-content" id="${sourceArray[item].Item_id}">
                    ${populateSubItems(sourceArray[item].Sub_item_names)}
                </div>
            </div>` );
        }
    }
}

function dropDownItemFunction() {
    // Dropdown Item click code ...
    console.log('Dropdown item clicked ');
}

populateList(array1, 1);
populateList(array2, 2);
populateList(array3, 3);
populateList(array4, 4);