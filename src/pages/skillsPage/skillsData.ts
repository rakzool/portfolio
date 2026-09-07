import type { IconType } from "react-icons";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiRedux, SiHtml5, SiCss, SiNodedotjs, SiExpress, SiSpringboot, SiApachekafka, SiMysql, SiMongodb, SiRedis, SiElasticsearch, SiDocker, SiJenkins, SiArgo, SiJest, SiSelenium, SiPostman, SiGrafana, SiKibana, SiGithubcopilot, SiClaude, SiRollupdotjs } from "react-icons/si";
import { FiCode, FiLayers, FiServer, FiDatabase, FiCloud, FiCheckCircle, FiCpu, FiGitBranch, FiActivity, FiShield, FiZap } from "react-icons/fi";

export type SkillFilter = "All skills" | "Frontend" | "Full stack" | "Tools";
interface Skill { name: string; icon: IconType }
interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: IconType;
  filters: SkillFilter[];
  skills: Skill[];
  evidence: string;
}
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend", title: "Frontend", subtitle: "Interfaces, platforms & design systems", icon: FiLayers,
    filters: ["Frontend", "Full stack"],
    skills: [
      { name: "React", icon: SiReact }, { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript }, { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "Redux", icon: SiRedux }, { name: "HTML5", icon: SiHtml5 }, { name: "CSS3", icon: SiCss },
      { name: "Micro-frontends", icon: FiLayers }, { name: "Design systems", icon: FiLayers },
      { name: "WebView / JS Bridge", icon: FiCode },
    ],
    evidence: "Owned Meesho’s React/TypeScript Supplier Panel architecture serving 30,000+ daily active users. Built a shared JS-Bridge package spanning 15+ native container endpoints.",
  },
  {
    id: "backend", title: "Backend", subtitle: "Services, APIs & event-driven systems", icon: FiServer,
    filters: ["Full stack"],
    skills: [
      { name: "Node.js", icon: SiNodedotjs }, { name: "Express.js", icon: SiExpress },
      { name: "Java", icon: FiCode }, { name: "Spring Boot", icon: SiSpringboot },
      { name: "RESTful APIs", icon: FiServer }, { name: "BFF architecture", icon: FiLayers },
      { name: "Kafka", icon: SiApachekafka }, { name: "System design", icon: FiLayers },
      { name: "WebSockets", icon: FiZap }, { name: "JWT", icon: FiShield },
    ],
    evidence: "Built a Node.js/Express BFF sustaining a peak of 3,400 requests per second at Meesho, and a Java/Spring Boot/Kafka ticket pipeline processing 1–1.2 million tickets daily at Paytm.",
  },
  {
    id: "data", title: "Data & search", subtitle: "Persistence, caching & retrieval", icon: FiDatabase,
    filters: ["Full stack"],
    skills: [
      { name: "SQL", icon: FiDatabase }, { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb }, { name: "Redis", icon: SiRedis },
      { name: "Elasticsearch", icon: SiElasticsearch },
    ],
    evidence: "Used MySQL and Redis in Meesho’s product attribute service, SQL and Elasticsearch for Paytm’s Zone Management system, and MongoDB for the Dare2Dev portal.",
  },
  {
    id: "delivery", title: "Cloud & delivery", subtitle: "Infrastructure, builds & deployment", icon: FiCloud,
    filters: ["Full stack", "Tools"],
    skills: [
      { name: "AWS", icon: FiCloud }, { name: "Docker", icon: SiDocker },
      { name: "Jenkins", icon: SiJenkins }, { name: "CI/CD", icon: FiGitBranch },
      { name: "ArgoCD", icon: SiArgo }, { name: "Rollup", icon: SiRollupdotjs },
    ],
    evidence: "Owned Docker and CI/CD deployment for the Supplier Panel BFF. Used Rollup to package the shared TypeScript JS-Bridge library.",
  },
  {
    id: "quality", title: "Testing & observability", subtitle: "Confidence in code and production", icon: FiCheckCircle,
    filters: ["Frontend", "Full stack", "Tools"],
    skills: [
      { name: "Jest", icon: SiJest }, { name: "JUnit", icon: FiCheckCircle },
      { name: "Selenium", icon: SiSelenium }, { name: "RestAssured", icon: FiCheckCircle },
      { name: "Postman", icon: SiPostman }, { name: "Grafana", icon: SiGrafana },
      { name: "Kibana", icon: SiKibana }, { name: "APM", icon: FiActivity },
    ],
    evidence: "Achieved 92% test coverage for the JS-Bridge package. Standardized Jest and RestAssured checks in CI/CD at Paytm and used Grafana telemetry for Meesho’s BFF.",
  },
  {
    id: "ai", title: "AI tools", subtitle: "Development assistance & code review", icon: FiCpu,
    filters: ["Tools"],
    skills: [
      { name: "Cursor", icon: FiCode }, { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "CodeRabbit", icon: FiGitBranch }, { name: "Claude", icon: SiClaude },
    ],
    evidence: "Listed in my resume’s AI toolkit. My engineering work also includes an LLM-based product attribute service built with Java and Spring Boot.",
  },
];
