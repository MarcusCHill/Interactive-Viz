import * as React from "react";
import "../styles/graphs.css";
import { PoemContext } from '../PoemProvider';
import * as d3 from "d3";

const data = [
  {
    "Question": "Do you feel that Black people are respected?",
    "Sample Size": 623,
    "Strongly Disagree": 24,
    "Slightly Disagree": 127,
    "Neither Disagree or Agree": 235,
    "Slightly Agree": 216,
    "Strongly Agree": 21,
  },
  {
    "Question": "Do you have a positive view on Blacks?",
    "Sample Size": 623,
    "Strongly Disagree": 29,
    "Slightly Disagree": 191,
    "Neither Disagree or Agree": 258,
    "Slightly Agree": 134,
    "Strongly Agree": 11,
  },
  {
    "Question": "If blacks don't do well it's because they don't work hard.",
    "Sample Size": 569,
    "Strongly Disagree": 170,
    "Slightly Disagree": 187,
    "Neither Disagree or Agree": 156,
    "Slightly Agree": 45,
    "Strongly Agree": 11,
  },
  {
    "Question": "Blacks have made valuable contributions to society.",
    "Sample Size": 624,
    "Strongly Disagree": 4,
    "Slightly Disagree": 4,
    "Neither Disagree or Agree": 60,
    "Slightly Agree": 293,
    "Strongly Agree": 263,
  },
];


export default function Graphs() {
  const { currVerse } = React.useContext(PoemContext);

  React.useEffect(() => {
    const defaultVerse = 1;
    const verseData = data[currVerse - 1] || data[defaultVerse - 1];

    const width = 500;
    const height = 300;

    const container = d3.select(`#graph${currVerse || defaultVerse}`);
    container.selectAll("*").remove();

    const svg = container
      .append("svg")
      .attr("class", "overflow-visible")
      .attr("width", width)
      .attr("height", height);

    const keys = ["Strongly Disagree", "Slightly Disagree", "Neither Disagree or Agree", "Slightly Agree", "Strongly Agree"];

    const maxBarHeight = 150;

    const scalingFactor = maxBarHeight / d3.max(keys, key => verseData[key]);

    const xScale = d3.scaleBand()
      .domain(keys)
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(keys, key => verseData[key]) * scalingFactor])
      .range([height, 0]);

    svg.selectAll("rect")
      .data(keys)
      .enter()
      .append("rect")
      .attr("x", key => xScale(key))
      .attr("y", key => yScale(verseData[key] * scalingFactor))
      .attr("width", xScale.bandwidth())
      .attr("height", key => height - yScale(verseData[key] * scalingFactor))
      .attr("fill", "#3498db");

    svg.selectAll(".bar-label")
      .data(keys)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr("x", key => xScale(key) + xScale.bandwidth() / 2)
      .attr("y", key => yScale(verseData[key] * scalingFactor) - 5)
      .attr("text-anchor", "middle")
      .text(key => verseData[key]);

    svg.append("text")
      .attr("class", "question-label")
      .attr("x", width / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text(verseData["Question"]);

    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("font-size", "12px")
      .style("text-anchor", "end")
      .attr("dx", "-0.8rem")
      .attr("dy", "-0.2rem")
      .attr("transform", "rotate(-45)");

  }, [currVerse]);

  return(
    <div className="graph-container">
      <div id="graph1" className={`graph ${currVerse === 1 ? "active" : ""}`}>
        {/*
           This D3.js graph corresponds to verse1 of the poem.
           The data utilized in this graph is on the survey queston:
           Do you feel that Black people are respected?
        */}
      </div>
      <div id="graph2" className={`graph ${currVerse === 2 ? "active" : ""}`}>
        {/*
           This D3.js graph corresponds to verse2 of the poem.
           The data utilized in this graph is on the survey queston:
           Do you have a positive view on Blacks?
        */}
      </div>
      <div id="graph3" className={`graph ${currVerse === 3 ? "active" : ""}`}>
        {/*
           This D3.js graph corresponds to verse3 of the poem.
           The data utilized in this graph is on the survey queston:
           If blacks don't do well it's because they don't work hard.
        */}
      </div>
      <div id="graph4" className={`graph ${currVerse === 4 ? "active" : ""}`}>
        {/*
           This D3.js graph corresponds to verse4 of the poem.
           The data utilized in this graph is on the survey queston:
           Blacks have made valuable contributions to society.
        */}
      </div>
    </div>
  )
}
