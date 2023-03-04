import React from "react";

const index = () => {
  return (
    <section id="about" className="py-10">
      <div className="text-center mt-14 flex flex-col items-center">
        <p className="text-white my-3 text-4xl mt-20 font-bold font-playFair">
          IEEE Paper Format | <span>Template & Guidelines</span>
        </p>
        <p className="text-justify text-lg m-10 w-[700px] text-white">
          IEEE provides guidelines for formatting your paper. These guidelines
          must be followed when you’re submitting a manuscript for publication
          in an IEEE journal. Some of the key guidelines are:
        </p>
        <ul
          role="list"
          className=" marker:text-sky-400 list-disc text-lg text-white text-justify w-[700px]"
        >
          <li>
            Formatting the text as two columns, in Times New Roman, 10 pt.
          </li>
          <li>
            Including a byline, an abstract, and a set of keywords at the start
            of the research paper.
          </li>
          <li>
            Placing any figures, tables, and equations at the top or bottom of a
            column, not in the middle.
          </li>
          <li>
            Following the appropriate heading styles for any headings you use.
          </li>
          <li>Including a full list of IEEE references at the end.</li>
          <li>Not including page numbers.</li>
        </ul>
      </div>

      <div className="text-center mt-2 flex flex-col items-center">
        <p className="text-white my-3 text-4xl mt-10 font-bold font-playFair">
          IEEE <span>heading styles</span>
        </p>
        <p className="text-justify text-lg m-10 w-[700px] text-white">
          IEEE recommends specific heading styles to distinguish the title and
          different levels of heading in your paper from each other. Styles for
          each of these are built into the template.
        </p>
        <p className="text-justify text-lg m-10 w-[700px] text-white mt-1">
          The paper title is written in 24 pt. Times New Roman, centered at the
          top of the first page. Other headings are all written in 10 pt. Times
          New Roman:
        </p>
        <ul
          role="list"
          className=" marker:text-sky-400 list-disc text-lg text-white text-justify w-[700px]"
        >
          <li>
            <b>Level 1 text headings</b> begin with a roman numeral followed by
            a period. They are written in small caps, in title case, and
            centered.
          </li>
          <li>
            <b>Level 2 text headings</b> begin with a capital letter followed by
            a period. They are italicized, left-aligned, and written in title
            case.
          </li>
          <li>
            <b>Level 3 text headings</b> begin with a number followed by a
            closing parenthesis. They are italicized, written in sentence case,
            and indented like a regular paragraph. The text of the section
            follows the heading immediately, after a colon.
          </li>
          <li>
            <b>Level 4 text headings</b> begin with a lowercase letter followed
            by a closing parenthesis. They are italicized, written in sentence
            case, and indented slightly further than a normal paragraph. The
            text of the section follows the heading immediately, after a colon.
          </li>
          <li>
            <b>Component headings</b> are used for the different components of
            your paper outside of the main text, such as the acknowledgments and
            references. They are written in small caps, in title case, centered,
            and without any numbering.
          </li>
        </ul>
      </div>

      <div className="text-center mt-2 flex flex-col items-center">
        <p className="text-white my-3 text-4xl mt-10 font-bold font-playFair">
          Page Sizes <span> and Margins</span>
        </p>
        <p className="text-justify text-lg m-10 w-[700px] text-white mt-1">
          If you are using the templates, you should not have to worry about
          sizes or spaces. The allowed pages sizes for papers are two: US
          Letter and ISO A4. Both are not identical, because Letter is wider
          than A4, and A4 is higher than Letter. The space dedicated for the
          columns of text is the same in both pages sizes.
        </p>
        <p className="text-justify text-lg m-10 w-[700px] text-white mt-3">
          Let's take a look at the sizes:
        </p>

        <table className="text-white w-[700px]">
          <thead>
            <tr>
              <th></th>
              <th colSpan="2" className="text-2xl">
                Width
              </th>
              <th colSpan="2" className="text-2xl">
                Length
              </th>
              <th colSpan="2" className="text-2xl">
                Area
              </th>
            </tr>

            <tr className="text-2xl">
              <th></th>
              <th>Inches</th>
              <th>Millimetres</th>
              <th>Inches</th>
              <th>Millimetres</th>
              <th>Square inches</th>
              <th>Square millimetres</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-lg font-bold">US Letter</td>
              <td>8.5</td>
              <td>215.9</td>
              <td>11</td>
              <td>279.4</td>
              <td>93.5</td>
              <td>60322.4</td>
            </tr>

            <tr>
              <td className="text-lg font-bold">ISO A4</td>
              <td>8.27</td>
              <td>210</td>
              <td>11.69</td>
              <td>297</td>
              <td>96.67</td>
              <td>62370</td>
            </tr>
          </tbody>
        </table>

        <p className="w-[700px] text-white mt-8 font-bold">
          Inside this area, the author can place text, qeuations, photos and
          graphics using two columns. These two columns are equal for both page
          sizes. The size of one column is:
        </p>

        <table className="text-white w-[700px] mt-4">
          <thead>
            <tr>
              <th></th>
              <th colSpan="2" className="text-2xl">
                Width
              </th>
              <th colSpan="2" className="text-2xl">
                Length
              </th>
              <th colSpan="2" className="text-2xl">
                Area
              </th>
            </tr>

            <tr className="text-2xl">
              <th></th>
              <th>Inches</th>
              <th>Millimetres</th>
              <th>Inches</th>
              <th>Millimetres</th>
              <th>Square inches</th>
              <th>Square millimetres</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-lg font-bold">Column</td>
              <td>3.5</td>
              <td>88.9</td>
              <td>9.25</td>
              <td>234.9</td>
              <td>32.375</td>
              <td>20887</td>
            </tr>
          </tbody>
        </table>

        <p className="text-white text-lg font-bold mt-8">
          Note: A Sample template is attached here with:
        </p>

        <p className="text-white my-3 text-4xl mt-10 font-bold font-playFair">
          Paper <span>Submission</span>
        </p>
        <p className="text-white text-2xl mt-4 hover:text-cyan-600"><a href="https://cmt3.research.microsoft.com/AICCIT2023" target="_blank">https://cmt3.research.microsoft.com/AICCIT2023</a></p>
      </div>
    </section>
  );
};

export default index;
