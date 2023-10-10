import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useProjects from '../hooks/useProjects';
import Searcher from './Searcher';

const Sidebar = () => {
  const { auth } = useAuth();
  const { handleSearcher } = useProjects();

  return (
    <aside className="md:w-1/4 lg:w-1/5 xl:w-1/6 px-4 py-4 bg-white ">
      <p className="">
        Hola: <span className="font-semibold">{auth.name}</span>
      </p>
      <Link
        to="/projects"
        className="w-full block rounded-3xl mt-4 py-2 px-4 font-semibold text-blue-600 hover:bg-gray-100"
      >
        Proyectos
      </Link>
      <Link
        onClick={handleSearcher}
        className="w-full block rounded-3xl mt-2 py-2 px-4 font-semibold text-blue-600 hover:bg-gray-100"
      >
        Buscar Proyecto
      </Link>
      <Link
        to="create-project"
        className="w-full block rounded-3xl mt-2 py-2 px-4 font-semibold text-blue-600 hover:bg-gray-100"
      >
        Crear Proyecto
      </Link>
      <Searcher />
    </aside>
  );
};

export default Sidebar;
