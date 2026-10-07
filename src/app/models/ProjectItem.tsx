type ColorKey = 'red' | 'blue' | 'indigo' | 'teal' | 'violet' | 'sky' | 'orange' | 'slate' | 'green' | 'pink' | 'yellow';

export default interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  github: string | null;
  photo: string;
  fit: "contain" | "cover";
  color: ColorKey;
}