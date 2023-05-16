import { FaDocker } from "react-icons/fa"
import { SiKubernetes } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { SiAmazonaws } from "react-icons/si"
import { SiNextdotjs } from "react-icons/si"

const currentLearningData = [
  {
    concept: "Next JS",
    area: "Backend",
    logo: <SiNextdotjs />
  },
  {
    concept: "TypeScript",
    area: "Frontend",
    logo: <SiTypescript />
  },
  {
    concept: "Docker",
    area: "Backend",
    logo: <FaDocker />
  },
  {
    concept: "Kubernetes",
    area: "Backend",
    logo: <SiKubernetes />
  },
  {
    concept: "Amazon S3",
    area: "Backend",
    logo: <SiAmazonaws />
  },
  {
    concept: "Dynamo DB",
    area: "Backend",
    logo: <SiAmazonaws />
  },
  {
    concept: "Postgres",
    area: "Backend",
    logo: <SiPostgresql />
  },
  {
    concept: "MySQL",
    area: "Backend",
    logo: <GrMysql />
  }
]

export default currentLearningData
