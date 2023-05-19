// import { FaDocker } from "react-icons/fa"
// import { SiKubernetes } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { SiAmazonaws } from "react-icons/si"
import { SiNextdotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"

const futureLearningData = [
  {
    concept: "TypeScript",
    area: "Frontend",
    logo: <SiTypescript />,
    time: "Future"
  },
  // {
  //   concept: "Docker",
  //   area: "Backend",
  //   logo: <FaDocker />,
  //   time: "Future"
  // },
  // {
  //   concept: "Kubernetes",
  //   area: "Backend",
  //   logo: <SiKubernetes />,
  //   time: "Future"
  // },
  {
    concept: "Amazon S3",
    area: "Backend",
    logo: <SiAmazonaws />,
    time: "Future"
  },
  // {
  //   concept: "Dynamo DB",
  //   area: "Backend",
  //   logo: <SiAmazonaws />,
  //   time: "Future"
  // },
  {
    concept: "Postgres",
    area: "Backend",
    logo: <SiPostgresql />,
    time: "Future"
  },
  {
    concept: "MySQL",
    area: "Backend",
    logo: <GrMysql />,
    time: "Future"
  },
  {
    concept: "Next JS",
    area: "Backend",
    logo: <SiNextdotjs />,
    time: "Currently"
  },
  {
    concept: "Express JS",
    area: "Backend",
    logo: <SiExpress />,
    time: "Currently"
  }
]

export default futureLearningData
