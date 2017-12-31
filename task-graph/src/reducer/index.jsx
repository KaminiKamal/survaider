import { DISPLAY_GENDER_GRAPH, DISPLAY_RELATION_LIST } from '../constant/constant.jsx';
import React, { Component } from 'react';
import {PieChart} from 'react-easy-chart';
import {BarChart} from 'react-easy-chart';

export default (state = [], action) => {

  switch(action.type) {

			case  DISPLAY_RELATION_LIST:
				const {responseData} = action;console.log("responseData", responseData);
				let not_in_family = 0;
				let wife = 0;
				let husband = 0;
				let counter_male = 0;
				let counter_female = 0;
				responseData.forEach((el, i) => {
					if(el.sex==="Male"){
						counter_male++;
					}
					if(el.sex=="Female"){
						counter_female++;
					}
					if(el.relationship==="Not-in-family"){
						not_in_family++;
					}
					if(el.relationship==="Wife"){
						wife++;
					}
					if(el.relationship=="Husband"){
						husband++;
					}
				});
				let total_ppl = not_in_family + wife + husband;
				let not_in_family_per = (not_in_family/total_ppl)*100;
				let wife_per = (wife/total_ppl)*100;
				let husband_per = (husband/total_ppl)*100;

				let total = counter_male + counter_female;
				let per_male = Math.round((counter_male/total)*100);
				let per_female = Math.round((counter_female/total)*100);

				const graph_pie = (<PieChart
														labels
													data={[
													{ key: 'Male', value: per_male, color: '#aaac84' },
													{ key: 'Female', value: per_female, color: '#dce7c5' }
													]}
													innerHoleSize={200}
													padding={10}
													styles={this.styles}
													/>);

				const bar_graph = (<BarChart
				  axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
				  axes
				  grid
				  colorBars
				  height={500}
				  width={300}
				  data={[
				   {
				     x: 'Not-in-family',
				     y: not_in_family_per
				   },
				   {
				     x: 'Wife',
				     y: wife_per
				   },
					 {
						x: 'Husband',
						y: husband_per
					}
				  ]}
				/>);
				return {"responseData" : bar_graph, "responseInfo" : graph_pie}

    default:
      return state;
  }
}
