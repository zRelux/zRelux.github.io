import React from "react";

import ItiImage from "../../assets/img/iti.png";
import UelImage from "../../assets/img/uel.png";
import Course from "./Course";
import { withStyles } from "@material-ui/core";

const courses = [
  {
    course: "University of East London",
    image: UelImage,
    date: "2019-2022",
    info: ["Computer Science"]
  },
  {
    course: "I.T.I.S. Fermi Lucca | Secondary School",
    image: ItiImage,
    date: "2014-2018",
    info: [
      "Studied for a High School - Computer Science",
      "A level on Computer Science.",
      "A level Telecommunications Systems Technologies and Design."
    ]
  }
];

const styles = theme => ({
  code: {
    marginTop: 30,
    marginBottom: 15
  },
  course: {
    marginBottom: 15
  }
});

class Courses extends React.Component {
  render() {
    const { classes } = this.props;

    return courses.map((item, i) => (
      <div key={item.course} className={classes.code}>
        <Course course={item} />
      </div>
    ));
  }
}

export default withStyles(styles, { withTheme: true })(Courses);
