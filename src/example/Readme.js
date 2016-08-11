/**
 * Created by ge on 6/24/16.
 */
import React from "react";
import Markdown from "react-markdownit";

import Highlight from "@episodeyang/react-highlight.js";
import PropsTable from "react-component-props-table";

import HappySandwichMakerExample from "../HappySandwichMaker.example";
import HappySandwichMakerSource from "!!raw!../HappySandwichMaker.example";
import HappySandwichMakerAST from "!!react-docgen!../HappySandwichMaker";

export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>{`
      # React ES6 Component Template

      [![github](https://img.shields.io/github/downloads/episodeyang/react-vis-link-graph/total.svg?style=flat-square&maxAge=2592000)]()

      ## Example Component: \`HappySandwichMaker\`
      This component makes you a delicious Subway sandwich.
      `}
      <HappySandwichMakerExample/>
      ### Props
      {`This table below is generated automatically`}
      <div className="table-container horizontal-scroll flex-column center">
        <PropsTable propMetaData={HappySandwichMakerAST.props}/>
      </div>
      {`
      ### Usage Example

      The source code below of the example above is loaded using the webpack raw loader.`}
      <Highlight>{HappySandwichMakerSource}</Highlight>
      {`
      ## Develop

      1. First make your changes, then git commit. Use \`serve-docs\` to view live update at [http://localhost:5000](http://localhost:5000).
      2. run \`build-docs\`, \`build-static-docs\`, \`gh-pages\`
      3. Then remember to push to master.

      `}
    </Markdown>
  )
}
