import testcases from './sort_testcases';
import sort from '../../src/sort/selectionsort';

testcases(sort).forEach(testcase => test(testcase.name, testcase.fn));