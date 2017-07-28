import testcases from './sort_testcases';
import sort from '../../src/sort/insertionsort';

testcases(sort).forEach(testcase => test(testcase.name, testcase.fn));