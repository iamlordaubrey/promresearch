// import React, { Component } from 'react';
// import './app.css';
//
// var country_data_url = 'https://restcountries.eu/rest/v1/all';
//
// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", country_data_url, false);
// xhttp.send();
// var countries_all = JSON.parse(xhttp.responseText);
//
// var num_countries = countries_all.length;
// var countries_by_region = [];
//
// countries_by_region.push([]);
// countries_by_region[0][0] = countries_all[num_countries - 1];
// countries_all.pop();
//
// var i;
// var j;
// var new_region;
//
// for (i = 0; i < (num_countries - 1); i++) {
//
//   new_region = true;
//
//   for (j = 0; j < countries_by_region.length; j++) {
//
//     if (countries_all[countries_all.length - 1].region === countries_by_region[j][0].region) {
//
//       countries_by_region[j][countries_by_region[j].length] = countries_all[countries_all.length - 1];
//       countries_all.pop();
//       new_region = false;
//       break;
//     }
//
//   }
//
//   if (new_region === true) {
//
//     countries_by_region.push([]);
//     countries_by_region[countries_by_region.length - 1][0] = countries_all[countries_all.length - 1];
//     countries_all.pop();
//   }
//
// }
//
// function sort_by_name(h) {
//
//   countries_by_region[h].sort(function(a, b) {
//     var nameA = a.name.toUpperCase();
//     var nameB = b.name.toUpperCase();
//
//     if (nameA < nameB) {
//       return -1;
//     }
//
//     if (nameA > nameB) {
//       return 1;
//     }
//
//     return 0;
//   });
//
// }
//
// function sort_by_popdens(h) {
//
//   countries_by_region[h].sort(function (a, b) {
//     var popdens_a = a.population/a.area;
//     var popdens_b = b.population/b.area;
//     return popdens_a - popdens_b;
//   });
//
// }
//
// var k;
//
// for (k = 0; k < countries_by_region.length; k++) {
//
//   sort_by_name(k);
//
// }
//
// console.log(countries_by_region);
//
// class CountryInfoContainer extends Component {
//
//   create_languages_string() {
//     var j;
//     var s = "";
//     for (j = 0; j < this.props.country.languages.length; j++) {
//
//       if (j === this.props.country.languages.length - 1) {
//         s = s + this.props.country.languages[j];
//       }  else {
//         s = s + (this.props.country.languages[j] + ", ");
//       }
//     }
//     return s;
//   }
//
//   render() {
//
//     return (
//       <div className="country_info_container">
//         <span className="page_title_span">
//           <p className="page_title"> WORLD REGIONS </p>
//         </span>
//         <span className="country_info_span">
//           <header className="country_info_header">
//             <h2 className="country_info_header_label">
//               SELECTED COUNTRY
//             </h2>
//           </header>
//           <div className="info_line">
//             <p className="info_label"> COUNTRY: </p>
//             <output className="info_output" id="country_name">
//               {this.props.country.name}
//             </output>
//           </div>
//           <div className="info_line">
//             <p className="info_label"> ALPHA<i>2</i>CODE: </p>
//             <output className="info_output" id="country_alpha2code">
//               {this.props.country.alpha2Code}
//             </output>
//           </div>
//           <div className="info_line">
//             <p className="info_label"> CAPITAL: </p>
//             <output className="info_output" id="country_capital">
//               {this.props.country.capital}
//             </output>
//           </div>
//           <div className="info_line">
//             <p className="info_label"> REGION: </p>
//             <output className="info_output" id="country_region">
//               {this.props.country.region}
//             </output>
//           </div>
//           <div className="info_line">
//             <p className="info_label"> POPULATION: </p>
//             <output className="info_output" id="country_population">
//               {this.props.country.population}
//             </output>
//           </div>
//           <div className="info_line">
//             <p className="info_label"> AREA: </p>
//             <output className="info_output" id="country_area">
//               {this.props.country.area}
//             </output>
//           </div>
//           <div className="info_line">
//             <p className="info_label"> NUMBER OF TIMEZONES: </p>
//             <output className="info_output" id="country_num_timezones">
//               {this.props.country.timezones.length}
//             </output>
//           </div>
//           <div className="info_line">
//             <p className="info_label"> LANGUAGES SPOKEN: </p>
//             <output className="info_output" id="country_languages">
//               {this.create_languages_string()}
//             </output>
//           </div>
//         </span>
//       </div>
//
//     );
//
//   }
// }
//
//
// class SortMethodList extends Component {
//
//   render () {
//
//     return (
//       <span className="sort_method_list_span">
//         <header className="sort_method_list_header">
//           <h3 className="sort_method_list_header_label">
//             &nbsp;&nbsp;Sort by:
//           </h3>
//         </header>
//         <select className="sort_method_list" onChange={() => this.props.onchange()} id={this.props.id} size="2">
//           <option className="sort_method" selected value="name">
//             NAME
//           </option>
//           <option className="sort_method" value="popdens">
//             POPULATION DENSITY
//           </option>
//         </select>
//       </span>
//
//     );
//   }
// }
//
// var num_regions = countries_by_region.length;
// var num_full_rows = Math.floor(num_regions/3);
// var num_regions_last_row = num_regions % 3;
// var n;
//
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       country: countries_by_region[0][0],
//       firstClick: true,
//       all_countries: countries_by_region,
//     };
//   }
//
//   handleCountrySelect(i) {
//     var region_select = document.getElementById("region_" + i.toString());
//     if (region_select.selectedIndex == countries_by_region[i].length) {
//
//     } else {
//       this.setState({country: countries_by_region[i][region_select.selectedIndex]});
//       if (this.state.firstClick == true) {
//         document.getElementById("country_name").style.visibility = "visible";
//         document.getElementById("country_alpha2code").style.visibility = "visible";
//         document.getElementById("country_capital").style.visibility = "visible";
//         document.getElementById("country_region").style.visibility = "visible";
//         document.getElementById("country_population").style.visibility = "visible";
//         document.getElementById("country_area").style.visibility = "visible";
//         document.getElementById("country_num_timezones").style.visibility = "visible";
//         document.getElementById("country_languages").style.visibility = "visible";
//         this.setState({firstClick: false});
//       }
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//       document.getElementById("region_" + i.toString() + "_option_" + countries_by_region[i].length.toString()).selected = true;
//     }
//   }
//
//   handleSortMethodChange(i) {
//     var method_select = document.getElementById("sort_method_" + i.toString());
//     var sort_method = method_select.options[method_select.selectedIndex].value;
//
//     if (sort_method == "name") {
//       sort_by_name(i);
//     } else {
//       sort_by_popdens(i);
//     }
//     this.setState({all_countries: countries_by_region});
//   }
//
//   renderOptionsForRegion(i) {
//     var options = [];
//     for (n=0; n<countries_by_region[i].length; n++) {
//       options.push( <option className="country" value={this.state.all_countries[i][n].name}
//                             id={"region_" + i.toString() + "_option_" + n.toString()}
//       >{this.state.all_countries[i][n].name}</option>);
//     }
//     options.push( <option className="blank_country"
//                           name={this.state.all_countries[i].region + "_extra"}
//                           id={"region_" + i.toString() + "_option_" + countries_by_region[i].length.toString()}
//                           selected disabled></option>);
//     return ( options );
//   }
//
//   renderOneRegionList(i) {
//     return (
//       <span className="one_region_list_span">
//         <header className="region_list_header">
//           <h3 className="region_list_header_label">
//             {countries_by_region[i][0].region.toUpperCase()}
//           </h3>
//         </header>
//         <select className="one_region_list" id={"region_" + i.toString()}
//                 size={(countries_by_region[i].length + 1).toString()} onChange={() => this.handleCountrySelect(i)}>
//           {this.renderOptionsForRegion(i)}
//         </select>
//       </span>
//     );
//   }
//
//   renderSortMethodList(i) {
//     return (
//       <SortMethodList
//         id={"sort_method_" + i.toString()}
//         onchange={() => this.handleSortMethodChange(i)}
//       />
//     );
//   }
//
//   renderCountryInfoContainer() {
//     return (
//       <CountryInfoContainer
//         country={this.state.country}
//       />
//     );
//   }
//
//   renderOneRow(z) {
//     return (
//       <div className="row_of_regions">
//         <span className="region_container">
//           {this.renderOneRegionList(z*3)}
//           {this.renderSortMethodList(z*3)}
//         </span>
//         <span className="region_container">
//           {this.renderOneRegionList((z*3) + 1)}
//           {this.renderSortMethodList((z*3) + 1)}
//         </span>
//         <span className="region_container">
//           {this.renderOneRegionList((z*3) + 2)}
//           {this.renderSortMethodList((z*3) + 2)}
//         </span>
//       </div>
//     );
//   }
//
//   renderOneRegionContainer(w) {
//     return (
//       <span className="region_container">
//         {this.renderOneRegionList((num_full_rows*3) + w)}
//         {this.renderSortMethodList((num_full_rows*3) + w)}
//       </span>
//     );
//   }
//
//   renderFullRows() {
//     var b;
//     var rows = [];
//     for (b=0; b<num_full_rows; b++) {
//       rows.push(this.renderOneRow(b));
//     }
//     return ( rows );
//   }
//
//   renderFinalRow() {
//     var a;
//     var last_row = [];
//     for (a=0; a<num_regions_last_row; a++) {
//       last_row.push(this.renderOneRegionContainer(a));
//     }
//     return ( <div className="row_of_regions"> {last_row} </div>);
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <div className="title_&_countryinfo">
//           {this.renderCountryInfoContainer()};
//         </div>
//         <div className="all_region_containers">
//           {this.renderFullRows()};
//           {this.renderFinalRow()};
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './app.css';

const COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentContents: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch(COUNTRIES_API)
      .then(data => data.json())
      .then(jsonData => {
        this.setState({
          items: jsonData,
          region: '',
          isLoaded: true
        })
      })
  }

  getCountries = (region) => {
    this.setState({
      currentContents: this.state.items.filter(x => x.region === region),
      region
    })
  };

  render() {
    const {
      items,
      isLoaded,
      currentContents,
      region
    } = this.state;

    if (!isLoaded) {
      return <div> loading </div>
    }

    const continents = [...new Set(items
      .map(item => item.region)
      .filter(item => item)
    )];

    return (
      <div>
        <Sidebar
          continents={continents}
          onClick={this.getCountries}
        />
        <Main
          mainContents={currentContents}
          region={region}
        />
      </div>
    )
  }
}

export default App;
