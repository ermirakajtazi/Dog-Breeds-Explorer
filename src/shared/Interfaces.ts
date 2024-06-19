interface Weight {
  imperial: string;
  metric: string;
}

interface Height {
  imperial: string;
  metric: string;
}

export interface Breed {
  weight: Weight;
  height: Height;
  id: number;
  name: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  bred_for: string;
  origin?:string
}

export interface Dog {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

