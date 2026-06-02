export const supabaseSchema = `
create table users (
  id uuid primary key,
  full_name text not null,
  email text not null unique,
  role text not null,
  phone text,
  created_at timestamptz default now()
);

create table student_profiles (
  id uuid primary key,
  user_id uuid references users(id),
  legajo text not null,
  carrera text not null,
  dni text,
  academic_email text,
  personal_email text
);

create table organizations (
  id uuid primary key,
  name text not null,
  cuit text,
  address text,
  industry text,
  website text,
  contact_email text,
  created_at timestamptz default now()
);

create table supervisors (
  id uuid primary key,
  user_id uuid references users(id),
  organization_id uuid references organizations(id),
  full_name text not null,
  position text,
  email text not null,
  phone text
);

create table pps_cases (
  id uuid primary key,
  student_id uuid references student_profiles(id),
  modality text not null,
  status text not null,
  organization_id uuid references organizations(id),
  supervisor_id uuid references supervisors(id),
  total_required_hours int default 200,
  total_declared_hours int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  approved_at timestamptz
);
`;
