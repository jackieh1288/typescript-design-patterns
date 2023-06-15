import { User, red } from './User';
import blue from './User'; // Notes: Avoid using the default statement to make the import statement stay consistent
import { Company } from './Company';
// import { CustomMap } from './CustomMap';
import { CustomMapV2 } from './CustomMapV2';

const user = new User();
const company = new Company();

// Poor extentiable solution
// const customMap = new CustomMap('map');

const customMap = new CustomMapV2('map');
customMap.addMarker(user);
customMap.addMarker(company);
