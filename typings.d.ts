interface Project {
  name: string;
  description: string;
  tags: Tag[];
}

interface Tag {
  name: string;
  color: string;
}
